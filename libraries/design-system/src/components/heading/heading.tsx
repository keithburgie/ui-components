import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Box, type BoxProps } from "@/components/box/box";

export const headingStyles = tv({
  base: "font-bold tracking-tight",
  variants: {
    level: {
      1: "text-4xl",
      2: "text-3xl",
      3: "text-2xl",
      4: "text-xl",
    },
    color: {
      default: "text-body-content",
      muted: "text-muted",
      inverted: "text-inverted-content",
    },
  },
  defaultVariants: {
    level: 1,
    color: "default",
  },
});

type HeadingVariants = VariantProps<typeof headingStyles>;

type HeadingProps<T extends React.ElementType> = BoxProps<T> & {
  /**
   * Semantic heading level that controls both typography size and the
   * rendered HTML tag (h1-h4) when `as` is not provided.
   *
   * **Auto-mapping behavior:**
   * - `level={1}` → renders as `<h1>`
   * - `level={2}` → renders as `<h2>`
   * - `level={3}` → renders as `<h3>`
   * - `level={4}` → renders as `<h4>`
   *
   * Use the `as` prop only when you need to decouple visual style from semantic meaning
   * (e.g., `level={2} as="h1"` for an H1 that looks like an H2).
   *
   * @default 1
   */
  level?: HeadingVariants["level"];
  /**
   * Text color using semantic tokens.
   * - `default`: Standard body text color
   * - `muted`: Subdued text color
   * - `inverted`: Light text for dark backgrounds
   * @default "default"
   */
  color?: HeadingVariants["color"];
};

/**
 * A polymorphic heading component that semantically renders h1-h4 tags
 * with corresponding typographic styles.
 *
 * ## Automatic Semantic Mapping
 *
 * The `level` prop automatically determines the HTML tag:
 *
 * ```tsx
 * <Heading level={1}>Page Title</Heading>  // Renders <h1>
 * <Heading level={2}>Section</Heading>     // Renders <h2>
 * ```
 *
 * ## When to Use the `as` Prop
 *
 * Only override the tag when you need to decouple visual style from semantics:
 *
 * ```tsx
 * // Semantically an H1, but styled like an H2
 * <Heading level={2} as="h1">Smaller Page Title</Heading>
 *
 * // Semantically a paragraph, but styled like an H3
 * <Heading level={3} as="p">Large Body Text</Heading>
 * ```
 */
export const Heading = <T extends React.ElementType = "h1">(
  props: HeadingProps<T>
) => {
  const { level, color, className, as, ...rest } = props;

  // Auto-map level to tag if 'as' is not provided
  const defaultTag = `h${level || 1}` as React.ElementType;

  return (
    <Box<T>
      as={(as || defaultTag) as T}
      className={headingStyles({ level, color, className })}
      {...(rest as React.ComponentProps<T>)}
    />
  );
};
