'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from './button'

interface ModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

interface ModalTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

interface ModalDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ open, onOpenChange, children }) => {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onOpenChange(false)
      }
    }

    if (open) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [open, onOpenChange])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      
      {/* Modal content */}
      <div className="relative z-10 w-full max-w-lg mx-4">
        {children}
      </div>
    </div>
  )
}

const ModalContent: React.FC<ModalContentProps> = ({ 
  className, 
  children, 
  ...props 
}) => {
  return (
    <div
      className={cn(
        'bg-background border border-border rounded-lg shadow-lg p-6',
        'animate-slide-up',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ 
  className, 
  children, 
  ...props 
}) => {
  return (
    <div
      className={cn('flex flex-col space-y-1.5 text-center sm:text-left pb-4', className)}
      {...props}
    >
      {children}
    </div>
  )
}

const ModalFooter: React.FC<ModalFooterProps> = ({ 
  className, 
  children, 
  ...props 
}) => {
  return (
    <div
      className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-4', className)}
      {...props}
    >
      {children}
    </div>
  )
}

const ModalTitle: React.FC<ModalTitleProps> = ({ 
  className, 
  children, 
  ...props 
}) => {
  return (
    <h2
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    >
      {children}
    </h2>
  )
}

const ModalDescription: React.FC<ModalDescriptionProps> = ({ 
  className, 
  children, 
  ...props 
}) => {
  return (
    <p
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    >
      {children}
    </p>
  )
}

export {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
}