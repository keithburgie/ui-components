"use client";

import { PropertyCardSkeleton } from "./property-card-skeleton";
import { PropertiesListContainer } from "./properties-list-container";

export function PropertiesLayoutLoading() {
  return (
    <PropertiesListContainer>
      {[...Array(6)].map((_, i) => (
        <PropertyCardSkeleton key={i} />
      ))}
    </PropertiesListContainer>
  );
}
