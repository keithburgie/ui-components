"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Flex } from "@ui/design-system/components";
import { type CommercialProperty } from "@/models/property/property.types";
import { PropertiesSidebar } from "./properties-sidebar";
import { PropertyDetailView } from "./property-detail-view";

interface PropertiesLayoutProps {
  properties: CommercialProperty[];
}

export function PropertiesLayout({ properties }: PropertiesLayoutProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedId = searchParams.get("id");
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const selectedProperty: CommercialProperty | null = selectedId
    ? (properties.find((p) => p.id === selectedId) ?? null)
    : null;

  const hasSelection = !!selectedProperty;

  React.useEffect(() => {
    if (hasSelection) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setIsTransitioning(false);
    }
  }, [hasSelection]);
  React.useEffect(() => {
    if (hasSelection) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [hasSelection]);

  const handlePropertyClick = (property: CommercialProperty) => {
    router.push(`/?id=${property.id}`, { scroll: false });
  };

  const handleBack = () => {
    router.push("/", { scroll: false });
  };

  return (
    <Flex
      className={`flex-col md:flex-row overflow-x-hidden ${
        hasSelection
          ? "h-[calc(100vh-4rem)] overflow-hidden"
          : "min-h-[calc(100vh-4rem)]"
      }`}
    >
      <PropertiesSidebar
        properties={properties}
        selectedProperty={selectedProperty}
        onPropertyClick={handlePropertyClick}
        isTransitioning={isTransitioning}
      />

      {selectedProperty && (
        <PropertyDetailView
          property={selectedProperty}
          isVisible={hasSelection && !isTransitioning}
          onBack={handleBack}
        />
      )}
    </Flex>
  );
}
