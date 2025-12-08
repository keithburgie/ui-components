"use client";

import { Box } from "@ui/design-system/components";
import { type CommercialProperty } from "@/models/property/property.types";
import { PropertiesList } from "./properties-list";
import { PropertiesSidebarCards } from "./properties-sidebar-card";
import { twMerge } from "tailwind-merge";

interface PropertiesSidebarProps {
  properties: CommercialProperty[];
  selectedProperty: CommercialProperty | null;
  onPropertyClick: (property: CommercialProperty) => void;
  isTransitioning: boolean;
}

export function PropertiesSidebar({
  properties,
  selectedProperty,
  onPropertyClick,
  isTransitioning,
}: PropertiesSidebarProps) {
  const hasSelection = !!selectedProperty;

  return (
    <Box
      as="aside"
      className={twMerge(
        "shrink-0 w-full",
        hasSelection &&
          "md:w-1/3 md:min-w-[320px] md:border-r md:border-border-default md:overflow-y-auto fixed md:relative bottom-0 left-0 right-0 md:left-auto md:right-auto h-auto md:h-auto max-h-[50vh] md:max-h-none border-t md:border-t-0 border-border-default flex flex-col z-50 md:z-auto bg-surface-base md:bg-transparent"
      )}
      style={{
        transition: "opacity 300ms ease-out",
      }}
    >
      {hasSelection && selectedProperty ? (
        <PropertiesSidebarCards
          properties={properties}
          selectedProperty={selectedProperty}
          onPropertyClick={onPropertyClick}
        />
      ) : (
        <PropertiesList
          properties={properties}
          onPropertyClick={onPropertyClick}
          isTransitioning={isTransitioning}
        />
      )}
    </Box>
  );
}
