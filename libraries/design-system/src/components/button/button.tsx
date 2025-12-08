import * as React from "react";
import { Box, type BoxProps } from "@/components/box/box";
import { tv, type VariantProps } from "tailwind-variants";

export const buttonStyles = tv({
  base: "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  variants: {
    variant: {
      primary: "bg-primary hover:bg-primary-hover text-primary-content",
      secondary:
        "bg-secondary hover:bg-secondary-hover text-secondary-content border border-secondary-border",
      ghost: "bg-ghost hover:bg-ghost-hover text-ghost-content",
      inverted:
        "bg-inverted hover:opacity-90 text-inverted-content shadow-md",
      link: "text-link-default justify-start underline-offset-4 hover:text-link-hover hover:underline",
      destructive:
        "bg-destructive hover:opacity-90 text-destructive-content",
    },
    size: {
      xs: "px-2 py-1 text-xs gap-0.5 [&>svg]:size-3.5",
      sm: "px-3 py-2 text-sm gap-1 [&>svg]:size-4",
      md: "px-4 py-2.5 text-base gap-1.5 [&>svg]:size-5",
      lg: "px-6 py-3 text-lg gap-2 [&>svg]:size-5",
      xl: "px-8 py-4 text-xl gap-2.5 [&>svg]:size-6",
    },
    shape: {
      square: "rounded-none",
      rounded: "rounded-md",
      pill: "rounded-full",
      circle: "rounded-full",
    },
    flush: {
      true: "p-0",
    },
    fullWidth: {
      true: "w-full",
    },
    iconOnly: {
      true: "aspect-square",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    shape: "rounded",
    flush: false,
    fullWidth: false,
    iconOnly: false,
  },
});

type ButtonVariants = VariantProps<typeof buttonStyles>;

type ShapeVariant = (readonly ["square", "rounded", "pill", "circle"])[number];

/**
 * Props for icon-only buttons (no text content).
 *
 * Use this pattern for decorative icons that don't need text labels.
 * The button should have an accessible `aria-label` or `aria-labelledby` attribute.
 *
 * @example
 * ```tsx
 * <Button icon={<Icon />} aria-label="Close dialog" />
 * ```
 */
type IconOnlyButtonProps = {
  /**
   * Icon element to render. When provided, creates an icon-only button.
   * Children are not allowed when using this prop.
   */
  icon: React.ReactNode;
  children?: never;
  iconStart?: never;
  iconEnd?: never;
  /** Shape of the icon button. @default "rounded" */
  shape?: Omit<ShapeVariant, "pill">;
  flush?: never;
  fullWidth?: never;
};

/**
 * Props for text buttons with icons (iconStart or iconEnd provided).
 *
 * When using iconStart or iconEnd, children are REQUIRED to ensure accessibility.
 * Icons are decorative and should be paired with text content for screen readers.
 *
 * @example
 * ```tsx
 * <Button iconStart={<Icon />}>Save</Button>
 * <Button iconEnd={<Icon />}>Next</Button>
 * ```
 */
type TextButtonWithIconsProps =
  | {
      icon?: never;
      /**
       * Button content. REQUIRED when using iconStart or iconEnd.
       * Can be a string or ReactNode (e.g., spans with sr-only text for responsive labels).
       *
       * @example
       * ```tsx
       * <Button iconStart={<Icon />}>
       *   <span className="hidden sm:inline">Save</span>
       *   <span className="sr-only">Save changes</span>
       * </Button>
       * ```
       */
      children: React.ReactNode;
      /**
       * Icon element to render before the text.
       * When provided, children become REQUIRED for accessibility.
       */
      iconStart: React.ReactNode;
      iconEnd?: React.ReactNode;
      /**
       * Shape of the button.
       * @default "rounded" */
      shape?: Omit<ShapeVariant, "circle">;
      /**
       * Remove padding for inline usage.
       * @default false */
      flush?: boolean;
      /**
       * Stretch to fill container width.
       * @default false */
      fullWidth?: boolean;
    }
  | {
      icon?: never;
      /**
       * Button content. REQUIRED when using iconStart or iconEnd.
       * Can be a string or ReactNode (e.g., spans with sr-only text for responsive labels).
       *
       * @example
       * ```tsx
       * <Button iconEnd={<Icon />}>
       *   <span className="hidden sm:inline">Save</span>
       *   <span className="sr-only">Save changes</span>
       * </Button>
       * ```
       */
      children: React.ReactNode;
      iconStart?: React.ReactNode;
      /**
       * Icon element to render after the text.
       * When provided, children become REQUIRED for accessibility.
       */
      iconEnd: React.ReactNode;
      /**
       * Shape of the button.
       * @default "rounded" */
      shape?: Omit<ShapeVariant, "circle">;
      /**
       * Remove padding for inline usage.
       * @default false */
      flush?: boolean;
      /**
       * Stretch to fill container width.
       * @default false */
      fullWidth?: boolean;
    };

/**
 * Props for text-only buttons (no icons).
 *
 * @example
 * ```tsx
 * <Button>Click me</Button>
 * ```
 */
type TextButtonProps = {
  icon?: never;
  /**
   * Button content. Can be a string or ReactNode.
   */
  children: React.ReactNode;
  iconStart?: never;
  iconEnd?: never;
  /**
   * Shape of the button.
   * @default "rounded" */
  shape?: Omit<ShapeVariant, "circle">;
  /**
   * Remove padding for inline usage.
   * @default false */
  flush?: boolean;
  /**
   * Stretch to fill container width.
   * @default false */
  fullWidth?: boolean;
};

export type ButtonProps<T extends React.ElementType> = Omit<
  BoxProps<T>,
  "children"
> & {
  /**
   * Visual style of the button.
   * @default "primary" */
  variant?: ButtonVariants["variant"];
  /**
   * Size of the button.
   * @default "md" */
  size?: ButtonVariants["size"];
} & (IconOnlyButtonProps | TextButtonWithIconsProps | TextButtonProps);

/**
 * A versatile button component with multiple variants, sizes, and icon support.
 *
 * Supports three usage patterns:
 * - Text-only buttons: `<Button>Click me</Button>`
 * - Buttons with icons: `<Button iconStart={<Icon />}>Save</Button>`
 * - Icon-only buttons: `<Button icon={<Icon />} aria-label="Close" />`
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Submit</Button>
 * <Button variant="secondary" iconStart={<SaveIcon />}>Save</Button>
 * <Button variant="ghost" icon={<CloseIcon />} aria-label="Close" />
 * ```
 */
export const Button = <T extends React.ElementType = "button">(
  props: ButtonProps<T>
) => {
  const {
    variant,
    size,
    shape,
    flush,
    fullWidth,
    icon,
    iconStart,
    iconEnd,
    children,
    className,
    as,
    ...rest
  } = props;

  const isIconOnly = icon !== undefined;

  return (
    <Box<T>
      as={(as || "button") as T}
      className={buttonStyles({
        variant,
        size,
        shape: shape as ShapeVariant,
        flush,
        fullWidth,
        iconOnly: isIconOnly,
        className,
      })}
      {...(rest as React.ComponentProps<T>)}
    >
      {isIconOnly ? (
        icon
      ) : (
        <>
          {iconStart}
          {children}
          {iconEnd}
        </>
      )}
    </Box>
  );
};
