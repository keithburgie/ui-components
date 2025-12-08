"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Box, Grid } from "@ui/design-system/components";

interface PropertiesListContainerProps {
  children: ReactNode;
  className?: string;
}

export function PropertiesListContainer({
  children,
  className,
}: PropertiesListContainerProps) {
  return (
    <Box className={twMerge("p-6 md:p-10", className)}>
      <Grid className="grid-cols-1 gap-6 max-w-5xl mx-auto">{children}</Grid>
    </Box>
  );
}
