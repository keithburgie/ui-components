import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Box, type BoxProps } from "@/components/box/box";

export const skeletonStyles = tv({
  base: "animate-pulse bg-skeleton-base",
  variants: {
    variant: {
      text: "rounded h-4 w-full",
      circular: "rounded-full",
      rectangular: "rounded-md",
    },
  },
  defaultVariants: {
    variant: "text",
  },
});

type SkeletonVariants = VariantProps<typeof skeletonStyles>;

export type SkeletonProps<T extends React.ElementType> = BoxProps<T> & {
  /**
   * The visual variant of the skeleton. Options include "text", "circular", and "rectangular".
   * @default "text"
   */
  variant?: SkeletonVariants["variant"];
};

/**
 * A visual placeholder component used to indicate loading states.
 */
export const Skeleton = <T extends React.ElementType = "div">(
  props: SkeletonProps<T>
) => {
  const { className, variant, as, ...rest } = props;

  return (
    <Box<T>
      as={as}
      className={skeletonStyles({ variant, className })}
      {...(rest as React.ComponentProps<T>)}
    />
  );
};
