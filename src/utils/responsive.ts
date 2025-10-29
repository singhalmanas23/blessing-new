// Production-grade responsive design utilities
export const CONTAINER_MAX_WIDTH = '1440px'

export const BREAKPOINTS = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  container: CONTAINER_MAX_WIDTH,
} as const

export const SPACING = {
  none: '',
  xs: 'py-2 sm:py-3',
  sm: 'py-4 sm:py-6',
  base: 'py-6 sm:py-8 lg:py-12',
  lg: 'py-8 sm:py-12 lg:py-16',
  xl: 'py-12 sm:py-16 lg:py-20',
  '2xl': 'py-16 sm:py-20 lg:py-24',
} as const

export const CONTAINER_PADDING = {
  none: '',
  sm: 'px-4 sm:px-6',
  base: 'px-4 sm:px-6 lg:px-8 xl:px-16',
  lg: 'px-6 sm:px-8 lg:px-12 xl:px-20',
  xl: 'px-8 sm:px-12 lg:px-16 xl:px-24',
} as const

export const TYPOGRAPHY = {
  xs: 'text-xs sm:text-sm',
  sm: 'text-sm sm:text-base',
  base: 'text-base sm:text-lg',
  lg: 'text-lg sm:text-xl md:text-2xl',
  xl: 'text-xl sm:text-2xl md:text-3xl',
  '2xl': 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
  '3xl': 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
  '4xl': 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
  '5xl': 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl',
  '6xl': 'text-6xl sm:text-7xl md:text-8xl lg:text-9xl',
} as const

// Helper functions
export function getContainerClasses(maxWidth: keyof typeof BREAKPOINTS = 'container') {
  return `w-full max-w-[${BREAKPOINTS[maxWidth]}] mx-auto`
}

export function getSpacingClasses(spacing: keyof typeof SPACING = 'base') {
  return SPACING[spacing]
}

export function getPaddingClasses(padding: keyof typeof CONTAINER_PADDING = 'base') {
  return CONTAINER_PADDING[padding]
}

export function getTypographyClasses(size: keyof typeof TYPOGRAPHY = 'base') {
  return TYPOGRAPHY[size]
}

// Production-grade responsive component classes
export const RESPONSIVE_CLASSES = {
  container: `${getContainerClasses()} ${getPaddingClasses()}`,
  section: `${getSpacingClasses()} ${getPaddingClasses()}`,
  centerContent: 'flex flex-col items-center justify-center text-center',
  flexBetween: 'flex items-center justify-between',
  gridResponsive: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8',
  cardSpacing: 'p-6 sm:p-8 lg:p-12',
  buttonBase: 'px-4 py-2 sm:px-6 sm:py-3 rounded-md transition-all duration-300',
  inputBase: 'w-full px-4 py-3 rounded-md border border-white/20 bg-white/5 text-white placeholder-white/60 focus:border-[#E79A01] focus:outline-none transition-colors duration-300',
} as const
