import { cn } from "@/lib/utils";

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

export const ProgressBar = ({ current, total, className }: ProgressBarProps) => {
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between text-sm text-muted-foreground mb-2">
        <span>Question {current} of {total}</span>
        <span>{Math.round(percentage)}% Complete</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};