import { Box, Heading, Surface } from "@ui/design-system/components";

export function PropertyDetailCard({
  children,
  className,
  heading,
  location,
}: {
  children: React.ReactNode;
  heading: string;
  className?: string;
  location?: "main" | "sidebar";
}) {
  return (
    <Surface
      as={location === "main" ? "section" : "div"}
      variant="filled"
      elevation="sm"
      rounded="lg"
      padding={8}
      className={className}
    >
      <Heading level={location === "main" ? 2 : 3} className="mb-4">
        {heading}
      </Heading>
      <Box className="space-y-4">{children}</Box>
    </Surface>
  );
}
