import React from 'react';

interface EnvironmentalGaugeProps {
  percentage: number;
  label: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
  colorScale?: 'standard' | 'inverted';
}

export const EnvironmentalGauge = ({
  percentage,
  label,
  description,
  size = 'md',
  colorScale = 'standard'
}: EnvironmentalGaugeProps) => {
  
  // Normalize percentage to be between 0 and 100
  const normalizedPercentage = Math.min(Math.max(percentage, 0), 100);
  
  // Determine color based on percentage
  const getColor = () => {
    if (colorScale === 'standard') {
      // Green is good (higher values are better)
      if (normalizedPercentage >= 75) return 'text-green-500';
      if (normalizedPercentage >= 50) return 'text-green-400';
      if (normalizedPercentage >= 25) return 'text-yellow-400';
      return 'text-red-500';
    } else {
      // Red is good (lower values are better)
      if (normalizedPercentage <= 25) return 'text-green-500';
      if (normalizedPercentage <= 50) return 'text-green-400';
      if (normalizedPercentage <= 75) return 'text-yellow-400';
      return 'text-red-500';
    }
  };
  
  // Size configurations
  const sizeConfig = {
    sm: {
      gaugeSize: 'h-20 w-20',
      strokeWidth: 8,
      fontSize: 'text-lg',
      descriptionSize: 'text-xs'
    },
    md: {
      gaugeSize: 'h-32 w-32',
      strokeWidth: 10,
      fontSize: 'text-2xl',
      descriptionSize: 'text-sm'
    },
    lg: {
      gaugeSize: 'h-40 w-40',
      strokeWidth: 12,
      fontSize: 'text-3xl',
      descriptionSize: 'text-base'
    }
  };
  
  const { gaugeSize, strokeWidth, fontSize, descriptionSize } = sizeConfig[size];
  const color = getColor();
  
  // Calculate the circumference of the circle
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate the stroke dash offset based on percentage
  const strokeDashoffset = circumference - (normalizedPercentage / 100) * circumference;
  
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className={`relative ${gaugeSize}`}>
        {/* Background circle */}
        <svg className="w-full h-full" viewBox="0 0 120 120">
          <circle 
            className="text-gray-700"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            cx="60"
            cy="60"
            r={radius}
          />
          
          {/* Progress circle */}
          <circle
            className={`${color} transform -rotate-90 origin-center`}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
            cx="60"
            cy="60"
            r={radius}
          />
        </svg>
        
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`${fontSize} font-bold ${color}`}>
            {normalizedPercentage}%
          </span>
        </div>
      </div>
      
      <h4 className="mt-4 font-semibold text-white">{label}</h4>
      
      {description && (
        <p className={`mt-1 ${descriptionSize} text-gray-400 max-w-xs`}>
          {description}
        </p>
      )}
    </div>
  );
}; 