import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

type MarkAsCompletedButtonProps = {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export function MarkAsCompletedButton({
  onClick,
  className = "",
  disabled,
  ...props
}: MarkAsCompletedButtonProps) {
  return (
    <Button
      variant="ghost"
      aria-label="mark as completed"
      onClick={onClick}
      className={className}
      disabled={disabled}
      {...props}
      asChild
    >
      <div>
        <CheckCircle className="text-blue-500 hover:text-white-100 inline mr-2" />
        mark as completed
      </div>
    </Button>
  );
}
