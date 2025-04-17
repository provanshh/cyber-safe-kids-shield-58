
interface ShieldLogoProps {
  className?: string;
  color?: "purple" | "blue";
}

export const ShieldLogo = ({ className = "h-8 w-8", color = "purple" }: ShieldLogoProps) => {
  const glowColor = color === "purple" ? "#8B5CF6" : "#1EAEDB";
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ filter: `drop-shadow(0 0 3px ${glowColor})` }}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M8 11l3 3 5-5" style={{ stroke: 'white' }} />
    </svg>
  );
};
