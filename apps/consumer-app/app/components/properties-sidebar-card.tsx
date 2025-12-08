"use client";

import { Box, Flex } from "@ui/design-system/components";
import { type CommercialProperty } from "@/models/property/property.types";
import { PropertyCard } from "./property-card";

interface PropertiesSidebarCardsProps {
  properties: CommercialProperty[];
  selectedProperty: CommercialProperty;
  onPropertyClick: (property: CommercialProperty) => void;
}

export function PropertiesSidebarCards({
  properties,
  selectedProperty,
  onPropertyClick,
}: PropertiesSidebarCardsProps) {
  return (
    <Box className="w-full h-auto md:h-full flex flex-col opacity-100">
      <Flex className="md:flex-col px-4 pt-4 pb-4 md:pb-2 md:space-y-4 gap-4 overflow-x-auto md:overflow-x-visible md:overflow-y-auto md:flex-1 md:min-h-0">
        {properties.map((property) => (
          <Box
            key={property.id}
            className="shrink-0 md:shrink w-[85vw] md:w-full"
          >
            <PropertyCard
              property={property}
              onClick={onPropertyClick}
              isSelected={property.id === selectedProperty.id}
              compact={true}
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
