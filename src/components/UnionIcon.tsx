export default function UnionIcon({ className = "w-8 h-9" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 32 35" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <linearGradient id="blessingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="2%" stopColor="#E79A01" />
          <stop offset="90%" stopColor="#E76C01" />
        </linearGradient>
      </defs>
      <path 
        d="M16 2L30 10L30 25L16 33L2 25L2 10L16 2Z" 
        fill="url(#blessingGradient)" 
        stroke="url(#blessingGradient)" 
        strokeWidth="0.5"
      />
      <circle cx="16" cy="17.5" r="6" fill="rgba(255,255,255,0.2)" />
    </svg>
  );
}
