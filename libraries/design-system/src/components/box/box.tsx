import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const boxStyles = tv({
  base: "box-border min-w-0",
});

export type BoxProps<T extends React.ElementType> = {
  /**
   * The underlying HTML element or React component to render.
   *
   * Defaults to "div".
   *
   * This prop allows for **Polymorphism**, meaning you can change the semantic tag
   * (like `as="footer"`) or use a custom component (like `as={Link}`)
   * while maintaining the Box's styling capabilities.
   *
   * This capability will extend to all components that are built upon this `Box`
   */
  as?: T;
} & React.ComponentProps<T> &
  VariantProps<typeof boxStyles>;

/**
 * Box is a fundamental building block of the layout system,
 * providing a consistent and predictable base for all layout components.
 */
export const Box = <T extends React.ElementType = "div">(
  props: BoxProps<T>
) => {
  const { as, className, ...rest } = props;
  const Component = as || "div";

  return <Component className={boxStyles({ className })} {...rest} />;
};
