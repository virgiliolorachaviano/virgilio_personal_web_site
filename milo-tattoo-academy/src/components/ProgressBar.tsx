'use client';

interface ProgressBarProps {
  progress: number;
  label?: string;
  showPercentage?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const ProgressBar = ({ 
  progress, 
  label, 
  showPercentage = true, 
  size = 'md' 
}: ProgressBarProps) => {
  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className={`font-medium text-gray-300 ${textSizeClasses[size]}`}>
              {label}
            </span>
          )}
          {showPercentage && (
            <span className={`font-semibold gradient-text ${textSizeClasses[size]}`}>
              {Math.round(progress)}%
            </span>
          )}
        </div>
      )}
      <div className={`w-full bg-gray-700 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div
          className="bg-gradient-primary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;