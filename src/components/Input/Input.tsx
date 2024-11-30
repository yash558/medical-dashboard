// helpers
import { cn } from "src/utils/common.helper";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  type?: string;
  name?: string;
  hasError?: boolean;
  className?: string;
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  id,
  type = "text",
  name,
  hasError = false,
  className = "",
  disabled = false,
  ...rest
}) => {
  return (
    <input
      autoComplete={type === "password" ? "new-password" : "on"}
      disabled={disabled}
      id={id}
      type={type}
      name={name}
      className={cn(
        "block rounded-lg text-base py-2.5 px-3.5 border border-[var(--primary-blue)] focus:border-[var(--border-theme-primary)]",
        { "border-[var(--border-error)]": hasError },
        className
      )}
      {...rest}
    />
  );
};
