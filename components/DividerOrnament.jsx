export default function DividerOrnament({ className = "", vertical = false }) {
  return (
    <div className={`flex items-center justify-center text-accent ${className} ${vertical ? 'rotate-90' : ''}`}>
      <svg width="300" height="60" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left Side Main Vine */}
        <path d="M135 30 Q110 5 80 30 T25 30 Q10 30 10 18 Q10 8 20 8 Q30 8 30 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Left Side Inner Swirls */}
        <path d="M80 30 Q60 55 40 30 Q35 20 25 28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M110 30 Q100 45 90 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        
        {/* Right Side Main Vine */}
        <path d="M165 30 Q190 5 220 30 T275 30 Q290 30 290 18 Q290 8 280 8 Q270 8 270 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Right Side Inner Swirls */}
        <path d="M220 30 Q240 55 260 30 Q265 20 275 28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M190 30 Q200 45 210 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        
        {/* Center Core */}
        <circle cx="150" cy="30" r="3" fill="currentColor" />
        <path d="M145 30 Q150 20 155 30 Q150 40 145 30 Z" fill="currentColor" />
      </svg>
    </div>
  );
}
