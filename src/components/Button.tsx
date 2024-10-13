import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useTheme } from "../Context/ThemeContext";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
}

const baseStyles =
  "inline-flex items-center rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition duration-300 ease-in-out";

const variantStyles = {
  primary: "bg-zinc-400 hover:bg-slate-800 border-transparent",
  secondary: "bg-gray-950 hover:bg-gray-900 border-transparent",
};

const sizeStyles = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const hoverEffect = "hover:bg-[#1c1c1c]";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  size = "medium", // Default to medium size
}) => {
  const { theme } = useTheme();

  const buttonClasses = classNames(
    baseStyles,
    variantStyles[theme === "dark" ? "primary" : "secondary"],
    sizeStyles[size],
    hoverEffect,
    className,
    {
      "cursor-not-allowed opacity-50": disabled, // Add disabled styles if disabled
    }
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

// PropTypes validation for TypeScript users
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Button;
