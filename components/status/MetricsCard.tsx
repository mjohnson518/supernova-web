import React from 'react';

interface MetricsCardProps {
  title: string;
  value: string | number;
  unit?: string;
  change?: {
    value: number;
    isPositive: boolean;
  };
  icon?: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
}

export const MetricsCard = ({
  title,
  value,
  unit,
  change,
  icon,
  variant = 'default'
}: MetricsCardProps) => {
  
  // Determine color scheme based on variant
  const getColorScheme = () => {
    switch (variant) {
      case 'success':
        return 'bg-green-500/20 text-green-400 border-green-700';
      case 'warning':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-700';
      case 'error':
        return 'bg-red-500/20 text-red-400 border-red-700';
      default:
        return 'bg-blue-500/20 text-blue-400 border-gray-700';
    }
  };
  
  return (
    <div className={`p-6 rounded-lg border ${getColorScheme()}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-400">{title}</p>
          <div className="mt-1 flex items-baseline">
            <p className="text-2xl font-semibold">
              {value}
              {unit && <span className="ml-1 text-sm text-gray-400">{unit}</span>}
            </p>
            {change && (
              <span
                className={`ml-2 flex items-baseline text-sm font-semibold ${
                  change.isPositive ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {change.isPositive ? (
                  <svg
                    className="h-4 w-4 self-center"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-4 w-4 self-center"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                )}
                <span className="ml-1">{Math.abs(change.value)}%</span>
              </span>
            )}
          </div>
        </div>
        {icon && <div>{icon}</div>}
      </div>
    </div>
  );
}; 