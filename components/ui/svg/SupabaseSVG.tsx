export default function SupabaseSVG() {
  return (
    <svg viewBox="0 0 256 256" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="supabaseGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#3ECF8E" />
          <stop offset="100%" stopColor="#2EB67D" />
        </linearGradient>
      </defs>
      <path fill="url(#supabaseGradient)" d="M143.4 12.7c-3.5-5.5-11.7-5.5-15.1 0L27.5 176.8c-3.9 6.1.5 14.1 7.6 14.1h90.6l-13.2 52.5c-1.7 6.6 6.6 10.7 10.9 5.7l107.6-124.9c4.7-5.5.8-13.8-6.4-13.8H128l15.4-97.7z"/>
    </svg>
  );
}
