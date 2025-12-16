import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export default function Button({
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`bg-yellow-400 rounded-md cursor-pointer hover:scale-105 duration-300 hover:bg-yellow-500 gap-x-3 md:gap-x-4 hover:gap-x-5 flex items-center shadow-md ${className}`}
    >
      {children}
    </button>
  )
}