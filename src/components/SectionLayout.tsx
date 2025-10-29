'use client'

import { ReactNode, forwardRef } from 'react'
import { ResponsiveContainer } from './ResponsiveContainer'

interface SectionLayoutProps {
  children: ReactNode
  className?: string
  id?: string
  backgroundImage?: string
  overlay?: boolean
  animation?: 'fade' | 'slide' | 'scale' | 'none'
  spacing?: 'none' | 'sm' | 'base' | 'lg' | 'xl'
}

export const SectionLayout = forwardRef<HTMLElement, SectionLayoutProps>(
  ({ 
    children, 
    className = '', 
    id,
    backgroundImage,
    overlay = false,
    animation = 'slide',
    spacing = 'base'
  }, ref) => {
    const animationClasses = {
      fade: 'section-animate opacity-0 transition-all duration-700',
      slide: 'section-animate opacity-0 translate-y-8 transition-all duration-700',
      scale: 'section-animate opacity-0 scale-95 transition-all duration-700',
      none: ''
    }

    const spacingClasses = {
      none: '',
      sm: 'py-12 sm:py-16',
      base: 'py-16 sm:py-20 lg:py-24',
      lg: 'py-20 sm:py-24 lg:py-32',
      xl: 'py-24 sm:py-32 lg:py-40'
    }

    return (
      <section
        ref={ref}
        id={id}
        className={`
          relative w-full overflow-hidden
          ${animationClasses[animation]}
          ${spacingClasses[spacing]}
          ${className}
        `.trim()}
      >
        {/* Background Image */}
        {backgroundImage && (
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat gpu-accelerated"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
          </div>
        )}

        {/* Overlay */}
        {overlay && (
          <div className="absolute inset-0 z-10 bg-black/20 backdrop-blur-xs" />
        )}

        {/* Content */}
        <ResponsiveContainer className="relative z-20">
          {children}
        </ResponsiveContainer>
      </section>
    )
  }
)

SectionLayout.displayName = 'SectionLayout'

// Specialized section layouts for common patterns
export function HeroSectionLayout({ children, className = '', ...props }: Omit<SectionLayoutProps, 'spacing'>) {
  return (
    <SectionLayout 
      className={`min-h-screen flex flex-col justify-center ${className}`}
      spacing="none"
      {...props}
    >
      {children}
    </SectionLayout>
  )
}

export function ContentSectionLayout({ children, className = '', ...props }: SectionLayoutProps) {
  return (
    <SectionLayout 
      className={`${className}`}
      spacing="base"
      {...props}
    >
      {children}
    </SectionLayout>
  )
}

export function FullWidthSectionLayout({ children, className = '', ...props }: SectionLayoutProps) {
  return (
    <SectionLayout 
      className={`${className}`}
      {...props}
    >
      <div className="w-full">
        {children}
      </div>
    </SectionLayout>
  )
}
