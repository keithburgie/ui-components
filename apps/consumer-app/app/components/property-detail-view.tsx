"use client";

import { twMerge } from "tailwind-merge";
import { Box } from "@ui/design-system/components";
import { type CommercialProperty } from "@/models/property/property.types";
import { PropertyDetail } from "./property-detail";

interface PropertyDetailViewProps {
  property: CommercialProperty;
  isVisible: boolean;
  onBack: () => void;
}

export function PropertyDetailView({
  property,
  isVisible,
  onBack,
}: PropertyDetailViewProps) {
  return (
    <Box
      className={twMerge(
        "relative",
        isVisible
          ? "flex-1 opacity-100 pb-20 md:pb-0 md:h-full md:overflow-y-auto"
          : "h-0 md:h-auto md:w-0 opacity-0 overflow-hidden"
      )}
      style={{
        transition: "opacity 300ms ease-out",
      }}
    >
      {isVisible && <PropertyDetail property={property} onBack={onBack} />}
    </Box>
  );
}
