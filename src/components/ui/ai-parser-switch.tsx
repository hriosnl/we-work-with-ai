'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface AiParserSwitchProps {
  isAiMode: boolean
  onToggle: (isAiMode: boolean) => void
  className?: string
}

export const AiParserSwitch: React.FC<AiParserSwitchProps> = ({
  isAiMode,
  onToggle,
  className,
}) => {
  return (
    <div className={cn('flex items-center space-x-2 text-xs', className)}>
      <button
        onClick={() => onToggle(false)}
        className={cn(
          'px-2 py-1 transition-colors',
          !isAiMode ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
        )}
      >
        Human
      </button>
      
      <span className="text-muted-foreground">|</span>
      
      <button
        onClick={() => onToggle(true)}
        className={cn(
          'px-2 py-1 transition-colors',
          isAiMode ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
        )}
      >
        Machine
      </button>
    </div>
  )
}