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

    // Simulate backend processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulate a failure for specific test cases or private videos
    if (url.includes('private') || url.includes('restricted')) {
      return NextResponse.json(
        { error: 'This video may be private or restricted.' },
        { status: 403 }
      );
    }

    if (url.includes('error')) {
      return NextResponse.json(
        { error: 'This video cannot be processed.' },
        { status: 422 }
      );
    }

    // Return a mock successful response
    // In a real application, this is where you would call an external API or service
    // that legally and technically retrieves the video details and download links.
    return NextResponse.json({
      success: true,
      data: {
        id: Math.random().toString(36).substring(7),
        title: 'Facebook Video ' + Math.floor(Math.random() * 1000),
        thumbnail: 'https://picsum.photos/seed/' + Math.random() + '/640/360',
        duration: '03:45',
        downloads: [
          {
            quality: 'HD',
            size: '24.5 MB',
            url: '#mock-hd-download',
          },
          {
            quality: 'SD',
            size: '8.2 MB',
            url: '#mock-sd-download',
          },
        ],
      },
    });

  } catch (error) {
    console.error('Download API Error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
