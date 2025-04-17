
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: "purple" | "blue" | "default";
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  color = "default"
}: FeatureCardProps) => {
  const iconColors = {
    purple: "text-cipher-purple",
    blue: "text-cipher-blue",
    default: "text-cipher-gray"
  };

  return (
    <div className="feature-card flex flex-col items-start">
      <div className={`p-3 rounded-lg bg-gray-50 mb-4 ${iconColors[color]}`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-cipher-gray text-sm">{description}</p>
    </div>
  );
};
