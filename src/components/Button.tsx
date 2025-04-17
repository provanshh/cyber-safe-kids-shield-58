
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "blue" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = "font-medium rounded-lg transition-colors duration-200 inline-flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-cipher-purple hover:bg-cipher-purple-dark text-white",
    secondary: "bg-white text-cipher-purple border border-cipher-purple hover:bg-cipher-purple/5",
    blue: "bg-cipher-blue hover:bg-cipher-blue-dark text-white",
    outline: "bg-transparent border border-gray-300 text-cipher-gray-dark hover:bg-gray-50"
  };
  
  const sizeStyles = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg"
  };
  
  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
