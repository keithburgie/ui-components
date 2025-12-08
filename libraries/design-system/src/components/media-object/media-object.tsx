import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Box, type BoxProps } from "@/components/box/box";

export const mediaObjectStyles = tv({
  slots: {
    root: "@container w-full",
    inner: "flex overflow-hidden",
    media: "relative overflow-hidden",
    img: "absolute inset-0 w-full h-full object-cover",
    content: "flex flex-1 flex-col min-w-0",
  },
  variants: {
    layout: {
      responsive: {
        inner: "flex-col @md:flex-row",
        media: "w-full @md:flex-none",
      },
      vertical: {
        inner: "flex-col",
        media: "w-full flex-none",
      },
      horizontal: {
        inner: "flex-row",
        media: "flex-none",
      },
    },
    spacing: {
      none: { content: "p-0" },
      sm: { content: "p-3" },
      md: { content: "p-4" },
    },
    mediaWidth: {
      fixed: { media: "h-48" },
      wide: { media: "h-48" },
      square: { media: "aspect-square" },
      fill: { media: "self-stretch" },
    },
    align: {
      start: { inner: "items-start" },
      center: { inner: "items-center" },
      end: { inner: "items-end" },
      stretch: { inner: "items-stretch" },
    },
  },
  compoundVariants: [
    {
      layout: ["responsive", "horizontal"],
      mediaWidth: "fixed",
      class: {
        media: "@md:w-48",
      },
    },
    {
      layout: ["responsive", "horizontal"],
      mediaWidth: "wide",
      class: {
        media: "@md:w-64",
      },
    },
    {
      layout: ["responsive", "horizontal"],
      mediaWidth: "square",
      class: {
        media: "@md:w-auto",
      },
    },
    {
      layout: ["responsive", "horizontal"],
      mediaWidth: "fill",
      class: {
        media: "@md:w-48",
      },
    },
    {
      layout: ["responsive", "horizontal"],
      spacing: "md",
      class: {
        content: "@md:p-6",
      },
    },
  ],
  defaultVariants: {
    layout: "responsive",
    spacing: "md",
    mediaWidth: "fixed",
    align: "start",
  },
});

type MediaObjectSlots = ReturnType<typeof mediaObjectStyles>;
const MediaContext = React.createContext<{ slots: MediaObjectSlots } | null>(
  null
);

function useMediaContext() {
  const context = React.useContext(MediaContext);
  if (!context)
    throw new Error("MediaObject parts must be used within MediaObject");
  return context;
}

/**
 * Props for the MediaObject component, extending the polymorphic element's props.
 */
type MediaObjectProps<T extends React.ElementType> = BoxProps<T> &
  VariantProps<typeof mediaObjectStyles>;

/**
 * A flexible layout component for displaying media (images, videos) alongside content.
 *
 * MediaObject uses a compound component pattern with sub-components:
 * - `MediaObject.Media` - Container for the media element
 * - `MediaObject.Image` - Pre-styled image component
 * - `MediaObject.Content` - Container for text/content
 *
 * Supports responsive layouts that adapt from vertical (mobile) to horizontal (desktop),
 * making it ideal for cards, list items, and content previews.
 *
 * @example
 * ```tsx
 * <MediaObject layout="responsive" spacing="md">
 *   <MediaObject.Media>
 *     <MediaObject.Image src="/image.jpg" alt="Description" />
 *   </MediaObject.Media>
 *   <MediaObject.Content>
 *     <Heading level={3}>Title</Heading>
 *     <Text>Description text</Text>
 *   </MediaObject.Content>
 * </MediaObject>
 * ```
 */
const Root = <T extends React.ElementType = "div">(
  props: MediaObjectProps<T>
) => {
  const {
    layout,
    spacing,
    mediaWidth,
    align,
    className,
    children,
    as,
    ...rest
  } = props;

  const slots = mediaObjectStyles({
    layout,
    spacing,
    mediaWidth,
    align,
  });

  return (
    <MediaContext.Provider value={{ slots }}>
      <Box<T>
        as={as}
        className={slots.root({ className })}
        {...(rest as React.ComponentProps<T>)}
      >
        <div className={slots.inner()}>{children}</div>
      </Box>
    </MediaContext.Provider>
  );
};

const Media = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { slots } = useMediaContext();
  return (
    <div className={slots.media({ className })} {...props}>
      {children}
    </div>
  );
};

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  className?: string;
  alt: string;
};

const Image = ({ className, alt, ...props }: ImageProps) => {
  const { slots } = useMediaContext();
  return <img alt={alt} className={slots.img({ className })} {...props} />;
};

const Content = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { slots } = useMediaContext();
  return (
    <div className={slots.content({ className })} {...props}>
      {children}
    </div>
  );
};

export const MediaObject = Object.assign(Root, {
  Media,
  Image,
  Content,
});
