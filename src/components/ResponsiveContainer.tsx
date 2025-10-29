import { ReactNode } from 'react'

interface ResponsiveContainerProps {
  children: ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  maxWidth?: 'full' | 'container' | '7xl' | '6xl' | '5xl'
  spacing?: 'none' | 'sm' | 'base' | 'lg' | 'xl'
}

export function ResponsiveContainer({ 
  children, 
  className = '', 
  as: Component = 'div',
  maxWidth = 'container',
  spacing = 'base'
}: ResponsiveContainerProps) {
  const maxWidthClasses = {
    full: 'w-full',
    container: 'max-w-[1440px]',
    '7xl': 'max-w-7xl',
    '6xl': 'max-w-6xl',
    '5xl': 'max-w-5xl'
  }

  const spacingClasses = {
    none: '',
    sm: 'px-4 sm:px-6 lg:px-8',
    base: 'px-6 sm:px-8 lg:px-12 xl:px-16',
    lg: 'px-8 sm:px-12 lg:px-16 xl:px-20',
    xl: 'px-12 sm:px-16 lg:px-20 xl:px-24'
  }

  return (
    <Component 
      className={`
        w-full 
        ${maxWidthClasses[maxWidth]} 
        ${spacingClasses[spacing]} 
        mx-auto 
        ${className}
      `.trim()}
    >
      {children}
    </Component>
  )
}

// Specialized containers for common use cases
export function SectionContainer({ children, className = '', ...props }: Omit<ResponsiveContainerProps, 'as'>) {
  return (
    <ResponsiveContainer 
      as="section" 
      className={`section-spacing-y ${className}`}
      {...props}
    >
      {children}
    </ResponsiveContainer>
  )
}

export function ContentContainer({ children, className = '', ...props }: Omit<ResponsiveContainerProps, 'as'>) {
  return (
    <ResponsiveContainer 
      className={`relative z-10 ${className}`}
      {...props}
    >
      {children}
    </ResponsiveContainer>
  )
}
