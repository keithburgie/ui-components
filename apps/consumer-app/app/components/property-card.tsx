"use client";

import { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import {
  MediaObject,
  Badge,
  Heading,
  Text,
  Box,
  Skeleton,
  Flex,
} from "@ui/design-system/components";
import { type CommercialProperty } from "@/models/property/property.types";

interface PropertyCardProps {
  property: CommercialProperty;
  onClick: (property: CommercialProperty) => void;
  isSelected?: boolean;
  compact?: boolean;
}

export function PropertyCard({
  property,
  onClick,
  isSelected = false,
  compact = false,
}: PropertyCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  let priceDisplay = "Contact for Price";
  let priceUnit = "";

  if (property.listingType === "FOR_SALE" && property.financials.salePrice) {
    priceDisplay = `$${property.financials.salePrice.toLocaleString()}`;
  } else if (
    property.listingType === "FOR_LEASE" &&
    property.financials.leaseInfo
  ) {
    priceDisplay = `$${property.financials.leaseInfo.leaseRate.toFixed(2)}`;
    priceUnit =
      property.financials.leaseInfo.leaseRateUnit === "USD/SF/YEAR"
        ? "/ SF / Yr"
        : "/ Month";
  } else if (property.listingType === "BOTH" && property.financials.salePrice) {
    priceDisplay = `$${property.financials.salePrice.toLocaleString()}`;
  }

  const primaryImage =
    property.media.find((m) => m.isPrimary && m.type === "IMAGE") ||
    property.media.find((m) => m.type === "IMAGE");

  const listingTypeLabel = property.listingType.replace("_", " ");

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(property);
    }
  };

  return (
    <Box
      role="button"
      tabIndex={0}
      onClick={() => onClick(property)}
      onKeyDown={handleKeyDown}
      className={twMerge(
        "block w-full text-left group",
        isSelected ? "cursor-default" : "cursor-pointer"
      )}
    >
      <MediaObject
        layout="responsive"
        spacing="md"
        mediaWidth="fill"
        align="stretch"
        className={twMerge(
          "bg-surface-card shadow-sm rounded-md overflow-hidden relative border transition-colors border-border-default",
          compact && "p-1",
          !isSelected && "group-hover:border-border-hover"
        )}
        style={{ willChange: "auto" }}
      >
        {primaryImage && !imageError && (
          <MediaObject.Media className="relative bg-skeleton-base">
            {imageLoading && (
              <Skeleton variant="rectangular" className="absolute inset-0" />
            )}
            <Image
              src={primaryImage.url}
              alt={primaryImage.altText || property.title}
              fill
              className={twMerge(
                "object-cover transition-opacity duration-300",
                imageLoading ? "opacity-0" : "opacity-100"
              )}
              sizes="(max-width: 768px) 100vw, 512px"
              loading="lazy"
              quality={85}
              onLoadingComplete={() => setImageLoading(false)}
              onError={() => {
                setImageError(true);
                setImageLoading(false);
              }}
            />
          </MediaObject.Media>
        )}
        {(!primaryImage || imageError) && (
          <MediaObject.Media className="relative bg-skeleton-base flex items-center justify-center">
            <Text size="sm" color="muted" align="center" className="p-4">
              No image available
            </Text>
          </MediaObject.Media>
        )}
        <MediaObject.Content className="min-w-0 relative gap-2">
          <Badge
            intent="info"
            size={compact ? "sm" : "md"}
            className={twMerge("self-start", compact ? "" : "mb-2")}
          >
            {listingTypeLabel}
          </Badge>
          {compact ? (
            <Text weight="semibold" className="line-clamp-2 wrap-break-word">
              {property.title}
            </Text>
          ) : (
            <Heading level={3} className="mb-2 line-clamp-2 wrap-break-word">
              {property.title}
            </Heading>
          )}
          <Text
            color="muted"
            size={compact ? "sm" : "sm"}
            className={compact ? "" : "mb-4"}
          >
            {property.location.address}, {property.location.city},{" "}
            {property.location.state}
          </Text>
          <Flex
            className={twMerge(
              "justify-between items-center mt-auto border-t border-border-muted",
              compact ? "pt-1" : "pt-4"
            )}
          >
            <Text color="muted" size={compact ? "xs" : "sm"}>
              {property.propertyType}
            </Text>
            <Text
              size={compact ? "base" : "lg"}
              weight="bold"
              className="text-success"
            >
              {priceDisplay}
              {priceUnit && (
                <Text as="span" size="xs" color="muted" className="ml-1">
                  {priceUnit}
                </Text>
              )}
            </Text>
          </Flex>
        </MediaObject.Content>
        {/* Darkened overlay - only visible when selected */}
        {isSelected && (
          <Box className="absolute inset-0 bg-black/5 rounded-md pointer-events-none" />
        )}
      </MediaObject>
    </Box>
  );
}
