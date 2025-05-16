import React from 'react';

export type StatusType = 'operational' | 'degraded' | 'outage' | 'maintenance';

interface StatusIndicatorProps {
  status: StatusType;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const StatusIndicator = ({
  status,
  label,
  size = 'md'
}: StatusIndicatorProps) => {
  
  const statusConfig: Record<StatusType, { color: string; label: string }> = {
    operational: {
      color: 'bg-green-500',
      label: 'Operational'
    },
    degraded: {
      color: 'bg-yellow-500',
      label: 'Degraded'
    },
    outage: {
      color: 'bg-red-500',
      label: 'Outage'
    },
    maintenance: {
      color: 'bg-blue-500',
      label: 'Maintenance'
    }
  };
  
  const sizeConfig = {
    sm: {
      dot: 'h-2 w-2',
      text: 'text-xs'
    },
    md: {
      dot: 'h-3 w-3',
      text: 'text-sm'
    },
    lg: {
      dot: 'h-4 w-4',
      text: 'text-base'
    }
  };
  
  const { color } = statusConfig[status];
  const { dot, text } = sizeConfig[size];
  const displayLabel = label || statusConfig[status].label;
  
  return (
    <div className="flex items-center">
      <div className={`${dot} ${color} rounded-full animate-pulse`}></div>
      <span className={`ml-2 ${text} text-gray-300`}>{displayLabel}</span>
    </div>
  );
}; 