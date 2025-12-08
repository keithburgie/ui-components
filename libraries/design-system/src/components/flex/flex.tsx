import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Box, type BoxProps } from "@/components/box/box";

export const flexStyles = tv({
  base: "flex",
  variants: {
    inline: {
      true: "inline-flex",
      false: "flex",
    },
  },
  defaultVariants: {
    inline: false,
  },
});

type FlexVariants = VariantProps<typeof flexStyles>;

type FlexProps<T extends React.ElementType> = BoxProps<T> & {
  /**
   * Renders as `inline-flex` instead of `flex`.
   * @default false
   */
  inline?: FlexVariants["inline"];
};

/**
 * A thin wrapper around the `Box` component that provides a flex container.
 *
 * - Reduces repetitive `<div className="flex">...</div>` boilerplate.
 * - Inherits polymorphism from `Box` (e.g. `as="section"`).
 * - Supports all standard HTML attributes.
 */
export const Flex = <T extends React.ElementType = "div">(
  props: FlexProps<T>
) => {
  const { inline, className, as, ...rest } = props;

  return (
    <Box<T>
      as={as}
      className={flexStyles({ inline, className })}
      {...(rest as React.ComponentProps<T>)}
    />
  );
};
