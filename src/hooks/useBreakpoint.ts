/**
 * @desc The 'useBreakpoint()' hook is used to get the current
 *       screen breakpoint based on the TailwindCSS config.
 *
 * @usage
 *    import { useBreakpoint } from "@/hooks/useBreakpoint";
 *
 *    const { isAboveSm, isBelowSm, sm } = useBreakpoint("sm");
 *    console.log({ isAboveSm, isBelowSm, sm });
 *
 *    const { isAboveMd } = useBreakpoint("md");
 *    const { isAboveLg } = useBreakpoint("lg");
 *    const { isAbove2Xl } = useBreakpoint("2xl");
 *    console.log({ isAboveMd, isAboveLg, isAbove2Xl });
 */
import { useMediaQuery } from 'react-responsive'

const fallbackBreakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
}

export function useBreakpoint<K extends string>(breakpointKey: K) {
  const noWindow = typeof window === 'undefined'
  let styles = noWindow
    ? undefined
    : window.getComputedStyle(document.documentElement)
  let breakpointsFromConfig = styles
    ? {
        sm: styles.getPropertyValue('--breakpoint-sm'),
        md: styles.getPropertyValue('--breakpoint-md'),
        lg: styles.getPropertyValue('--breakpoint-lg'),
        xl: styles.getPropertyValue('--breakpoint-xl'),
        '2xl': styles.getPropertyValue('--breakpoint-2xl'),
        '3xl': styles.getPropertyValue('--breakpoint-3xl'),
        '4xl': styles.getPropertyValue('--breakpoint-4xl'),
        '5xl': styles.getPropertyValue('--breakpoint-5xl'),
      }
    : undefined
  const breakpoints = breakpointsFromConfig || fallbackBreakpoints
  const breakpointValue =
    breakpoints[
      breakpointKey as
        | keyof typeof fallbackBreakpoints
        | keyof typeof breakpoints
    ]

  const bool = useMediaQuery({
    query: `(max-width: ${breakpointValue})`,
  })
  const capitalizedKey =
    breakpointKey[0].toUpperCase() + breakpointKey.substring(1)

  type KeyAbove = `isAbove${Capitalize<K>}`
  type KeyBelow = `isBelow${Capitalize<K>}`

  return {
    [breakpointKey]: Number(String(breakpointValue).replace(/[^0-9]/g, '')),
    [`isAbove${capitalizedKey}`]: noWindow ? true : !bool,
    [`isBelow${capitalizedKey}`]: noWindow ? false : bool,
  } as Record<K, number> & Record<KeyAbove | KeyBelow, boolean>
}
