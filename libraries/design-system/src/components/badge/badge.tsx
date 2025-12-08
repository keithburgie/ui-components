import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Box, type BoxProps } from "@/components/box/box";

export const badgeStyles = tv({
  base: "inline-flex items-center justify-center rounded-full font-semibold tracking-wide uppercase whitespace-nowrap",
  variants: {
    intent: {
      neutral: "bg-neutral text-neutral-content",
      success: "bg-success text-success-content",
      warning: "bg-warning text-warning-content",
      danger: "bg-destructive text-destructive-content",
      info: "bg-info text-info-content",
    },
    size: {
      sm: "text-[0.625rem] px-1.5 py-0",
      md: "text-xs px-2.5 py-0.5",
    },
  },
  defaultVariants: {
    intent: "neutral",
    size: "md",
  },
});

type BadgeVariants = VariantProps<typeof badgeStyles>;

/** Props for the Badge component, extending the polymorphic element's props */
type BadgeProps<T extends React.ElementType> = BoxProps<T> & {
  /**
   * Visual intent/status of the badge.
   * @default "neutral"
   */
  intent?: BadgeVariants["intent"];
  /**
   * Size of the badge.
   * @default "md"
   */
  size?: BadgeVariants["size"];
};

/**
 * A small, descriptive component used to highlight an item's status or category.
 */
export const Badge = <T extends React.ElementType = "span">(
  props: BadgeProps<T>
) => {
  const { intent, size, className, as, ...rest } = props;

  return (
    <Box<T>
      as={(as || "span") as T}
      className={badgeStyles({ size, intent, className })}
      {...(rest as React.ComponentProps<T>)}
    />
  );
};
