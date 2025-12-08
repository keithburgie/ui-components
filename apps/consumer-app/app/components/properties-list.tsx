"use client";

import { twMerge } from "tailwind-merge";
import { Box } from "@ui/design-system/components";
import { type CommercialProperty } from "@/models/property/property.types";
import { PropertyCard } from "./property-card";
import { PropertiesListContainer } from "./properties-list-container";

interface PropertiesListProps {
  properties: CommercialProperty[];
  onPropertyClick: (property: CommercialProperty) => void;
  isTransitioning: boolean;
}

export function PropertiesList({
  properties,
  onPropertyClick,
  isTransitioning,
}: PropertiesListProps) {
  return (
    <PropertiesListContainer
      className={twMerge(
        "transition-opacity duration-300 ease-out",
        isTransitioning ? "opacity-0" : "opacity-100"
      )}
    >
      {properties.map((property, index) => (
        <Box
          key={property.id}
          className="animate-fade-in-up"
          style={{
            animationDelay: `${Math.min(index * 40, 400)}ms`,
            animationFillMode: "both",
          }}
        >
          <PropertyCard
            property={property}
            onClick={onPropertyClick}
            isSelected={false}
          />
        </Box>
      ))}
    </PropertiesListContainer>
  );
}
