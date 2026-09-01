export default function AdPlaceholder({ text = 'AdSense Advertisement' }: { text?: string }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-8">
      <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 flex items-center justify-center min-h-[90px] text-gray-400 text-sm">
        <span className="uppercase tracking-widest text-xs font-semibold">{text}</span>
      </div>
    </div>
  );
}
