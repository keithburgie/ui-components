import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Box, type BoxProps } from "@/components/box/box";

export const gridStyles = tv({
  base: "grid",
  variants: {
    inline: {
      true: "inline-grid",
      false: "grid",
    },
  },
  defaultVariants: {
    inline: false,
  },
});

type GridVariants = VariantProps<typeof gridStyles>;

type GridProps<T extends React.ElementType> = BoxProps<T> & {
  /**
   * Renders as `inline-grid` instead of `grid`.
   * @default false
   */
  inline?: GridVariants["inline"];
};

/**
 * A thin wrapper around the `Box` component that provides a grid container.
 *
 * - Reduces repetitive `<div className="grid">...</div>` boilerplate.
 * - Inherits polymorphism from `Box` (e.g. `as="section"`).
 * - Supports all standard HTML attributes.
 */
export const Grid = <T extends React.ElementType = "div">(
  props: GridProps<T>
) => {
  const { inline, className, as, ...rest } = props;

  return (
    <Box<T>
      as={as}
      className={gridStyles({ inline, className })}
      {...(rest as React.ComponentProps<T>)}
    />
  );
};
