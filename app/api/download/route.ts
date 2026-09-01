import { NextRequest, NextResponse } from 'next/server';

// In a real app, this might be a more robust rate limiter using Redis or a database
// This is a simple in-memory store for demonstration purposes in a single-instance environment
const rateLimitMap = new Map<string, { count: number, timestamp: number }>();

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (now - record.timestamp > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { url } = body;

    if (!url || typeof url !== 'string') {
      return NextResponse.json(
        { error: 'Please enter a Facebook video URL.' },
        { status: 400 }
      );
    }

    // Basic URL validation to ensure it's a valid format and is a facebook URL
    let parsedUrl;
    try {
      parsedUrl = new URL(url);
    } catch (e) {
      return NextResponse.json(
        { error: 'Please enter a valid public Facebook video URL.' },
        { status: 400 }
      );
    }

    const validHosts = ['facebook.com', 'www.facebook.com', 'fb.watch', 'm.facebook.com', 'web.facebook.com'];
    if (!validHosts.includes(parsedUrl.hostname)) {
      return NextResponse.json(
        { error: 'Please enter a valid public Facebook video URL.' },
        { status: 400 }
      );
    }

    // Call the RapidAPI Facebook Downloader
    const rapidApiKey = process.env.RAPIDAPI_KEY || '0bf1205397msh32af5754c135319p1c10c5jsnbc1d894ead1a';
    
    try {
      const apiResponse = await fetch('https://facebook-media-downloader1.p.rapidapi.com/get_media', {
        method: 'POST',
        headers: {
          'x-rapidapi-key': rapidApiKey,
          'x-rapidapi-host': 'facebook-media-downloader1.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: parsedUrl.href })
      });

      const apiData = await apiResponse.json();

      // Check if API returned an error
      if (!apiResponse.ok || (apiData.status === false) || (apiData.error)) {
        return NextResponse.json(
          { error: apiData.message || apiData.error || 'This video may be private or invalid.' },
          { status: 400 }
        );
      }

      // Parse the dynamic API response to match our frontend interface
      const downloads = [];
      
      // Look for standard SD/HD keys or a links array
      if (apiData.hd || apiData.hd_url || apiData.hdUrl) {
        downloads.push({ quality: 'HD', size: 'Unknown', url: apiData.hd || apiData.hd_url || apiData.hdUrl });
      }
      if (apiData.sd || apiData.sd_url || apiData.sdUrl) {
        downloads.push({ quality: 'SD', size: 'Unknown', url: apiData.sd || apiData.sd_url || apiData.sdUrl });
      }
      
      // If it comes in an array format
      if (apiData.links && Array.isArray(apiData.links)) {
        apiData.links.forEach((link: any) => {
          if (link.url) {
            downloads.push({
              quality: link.quality || link.resolution || 'Video',
              size: link.size || 'Unknown',
              url: link.url
            });
          }
        });
      } else if (apiData.data && apiData.data.links) {
         // Some APIs wrap in 'data'
         const linksObj = apiData.data.links;
         if (linksObj.hd) downloads.push({ quality: 'HD', size: 'Unknown', url: linksObj.hd });
         if (linksObj.sd) downloads.push({ quality: 'SD', size: 'Unknown', url: linksObj.sd });
      }

      // Check for facebook-media-downloader1 specific format
      if (apiData.direct_media_url) {
        downloads.push({ quality: 'Original Quality', size: 'Unknown', url: apiData.direct_media_url });
      }

      // If we still didn't find links but there is a top level url
      if (downloads.length === 0 && apiData.url) {
        downloads.push({ quality: 'Original', size: 'Unknown', url: apiData.url });
      }

      if (downloads.length === 0) {
        return NextResponse.json(
          { error: 'No downloadable links found for this video. It might be private.' },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        data: {
          id: apiData.id || Math.random().toString(36).substring(7),
          title: apiData.title || apiData.description || 'Facebook Video',
          thumbnail: apiData.thumbnail || apiData.cover || apiData.picture || 'https://picsum.photos/640/360?grayscale',
          duration: apiData.duration ? `${Math.floor(apiData.duration/60)}:${(apiData.duration%60).toString().padStart(2, '0')}` : '-',
          downloads: downloads,
        },
      });

    } catch (apiError) {
      console.error('RapidAPI Fetch Error:', apiError);
      return NextResponse.json(
        { error: 'Failed to connect to the video processing service.' },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error('Download API Error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
