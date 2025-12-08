import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Box, type BoxProps } from "@/components/box/box";

export const surfaceStyles = tv({
  base: "relative overflow-hidden",
  variants: {
    variant: {
      filled: "bg-surface-card border border-border-default",
      outlined: "bg-transparent border border-border-default",
      ghost: "bg-surface-base border-transparent",
    },
    elevation: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
    },
    padding: {
      0: "p-0",
      4: "p-4",
      8: "p-8",
    },
    rounded: {
      none: "rounded-none",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "filled",
    elevation: "sm",
    padding: 4,
    rounded: "md",
  },
});

type SurfaceVariants = VariantProps<typeof surfaceStyles>;

/** Props for the Surface component, extending the polymorphic element's props. */
export type SurfaceProps<T extends React.ElementType> = BoxProps<T> & {
  /**
   * Visual style of the surface.
   * - `filled`: White/dark background (standard card)
   * - `outlined`: Transparent background with border
   * - `ghost`: Subtly colored background (sidebar/well)
   * @default "filled"
   */
  variant?: SurfaceVariants["variant"];
  /**
   * Shadow depth of the surface.
   * @default "sm"
   */
  elevation?: SurfaceVariants["elevation"];
  /**
   * Internal padding of the surface.
   * @default 4
   */
  padding?: SurfaceVariants["padding"];
  /**
   * Border radius of the surface.
   * @default "md"
   */
  rounded?: SurfaceVariants["rounded"];
};

/**
 * A foundational component for grouping content and creating distinct visual areas.
 */
export const Surface = <T extends React.ElementType = "div">(
  props: SurfaceProps<T>
) => {
  const { variant, elevation, padding, rounded, className, as, ...rest } =
    props;

  return (
    <Box<T>
      as={as}
      className={surfaceStyles({
        variant,
        elevation,
        padding,
        rounded,
        className,
      })}
      {...(rest as React.ComponentProps<T>)}
    />
  );
};
