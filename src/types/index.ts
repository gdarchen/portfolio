import 'react'

// Allow setting CSS variables in CSSProperties (inline-style of React components)
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined
  }
}

declare module '*.jpg'
declare module '*.png'
