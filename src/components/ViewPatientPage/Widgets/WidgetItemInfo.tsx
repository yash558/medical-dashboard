// utils
import { addSpaceIfCamelCase, cn } from "src/utils/common.helper";

interface WidgetItemInfoProps {
  label: string;
  data: string | number | React.ReactNode;
  className?: string;
}

export const WidgetItemInfo: React.FC<WidgetItemInfoProps> = ({
  label,
  data,
  className = "",
}) => (
  <div
    className={cn(
      "flex flex-col gap-2 w-full text-[var(--text-light-gray)]",
      label.toLowerCase() !== "email" && "capitalize",
      className
    )}
  >
    <span className="text-sm font-bold">{addSpaceIfCamelCase(label)}</span>
    <p className="text-sm">{data}</p>
  </div>
);
