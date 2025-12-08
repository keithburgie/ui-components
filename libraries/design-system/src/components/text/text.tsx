import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Box, type BoxProps } from "@/components/box/box";

export const textStyles = tv({
  base: "text-body-content",
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl",
    },
    weight: {
      100: "font-thin",
      200: "font-extralight",
      300: "font-light",
      400: "font-normal",
      500: "font-medium",
      600: "font-semibold",
      700: "font-bold",
      800: "font-extrabold",
      900: "font-black",
    },
    color: {
      default: "text-body-content",
      muted: "text-muted",
      inverted: "text-inverted-content",
      primary: "text-primary",
      error: "text-destructive",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

type TextVariants = VariantProps<typeof textStyles>;

type TextProps<T extends React.ElementType> = BoxProps<T> & {
  /**
   * Font size of the text.
   * @default "base"
   */
  size?: TextVariants["size"];
  /**
   * Font weight of the text.
   * @default "regular"
   */
  weight?: TextVariants["weight"];
  /**
   * Text color using semantic tokens.
   * @default "default"
   */
  color?: TextVariants["color"];
  /**
   * Text alignment.
   * @default "left"
   */
  align?: TextVariants["align"];
};

/**
 * A polymorphic text component for displaying consistent typography.
 */
export const Text = <T extends React.ElementType = "p">(
  props: TextProps<T>
) => {
  const { size, weight, color, align, className, as, ...rest } = props;

  return (
    <Box<T>
      as={(as || "p") as T}
      className={textStyles({ size, weight, color, align, className })}
      {...(rest as React.ComponentProps<T>)}
    />
  );
};
