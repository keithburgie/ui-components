"use client";
import Image from "next/image";
import { X, Check, Phone, Mail } from "lucide-react";
import {
  Button,
  Box,
  Heading,
  Text,
  Badge,
  Grid,
  Flex,
  Link,
  Surface,
} from "@ui/design-system/components";
import { type CommercialProperty } from "@/models/property/property.types";
import { PropertyDetailCardRow } from "./property-detail-card-row";
import { PropertyDetailCard } from "./property-detail-card";

interface PropertyDetailProps {
  property: CommercialProperty;
  onBack?: () => void;
}

export function PropertyDetail({ property, onBack }: PropertyDetailProps) {
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
    if (property.financials.leaseInfo) {
      priceUnit = `$${property.financials.leaseInfo.leaseRate.toFixed(2)} / SF / Yr (Lease)`;
    }
  }

  const primaryImage = property.media.find((m) => m.isPrimary);

  return (
    <Box className="min-h-screen animate-fade-in">
      {/* Hero Section with Image */}
      <Box className="relative h-72 bg-linear-to-br from-body to-body overflow-hidden">
        {primaryImage && (
          <Image
            src={primaryImage.url}
            alt={primaryImage.altText || property.title}
            fill
            className="object-cover opacity-40"
            sizes="100vw"
            priority
          />
        )}
        <Box className="absolute inset-0 bg-linear-to-t from-body/80 to-transparent z-0" />

        {/* Close button at top right */}
        {onBack && (
          <Box className="absolute top-4 right-4 z-20">
            <Button
              variant="inverted"
              size="sm"
              onClick={onBack}
              className="rounded-full p-2 min-w-0 h-auto aspect-square"
              aria-label="Close details"
              icon={<X className="size-5" />}
            />
          </Box>
        )}
        <Flex className="relative z-10 max-w-full px-6 h-full flex-col justify-end pb-8">
          <Flex className="flex-wrap gap-2 mb-3">
            <Badge intent="info">
              {property.listingType.replace("_", " ")}
            </Badge>
            <Badge intent="neutral">{property.propertyType}</Badge>
            <Badge
              intent={
                property.status === "ACTIVE"
                  ? "success"
                  : property.status === "SOLD"
                    ? "danger"
                    : "warning"
              }
            >
              {property.status}
            </Badge>
          </Flex>

          <Heading level={1} className="text-3xl md:text-4xl font-bold mb-2">
            {property.title}
          </Heading>
          <Text size="lg" className="opacity-80">
            {property.location.address}, {property.location.city},{" "}
            {property.location.state} {property.location.zipCode}
          </Text>
        </Flex>
      </Box>

      {/* Main Content */}
      <Box className="max-w-full w-full p-6">
        <Grid className="grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <Box className="lg:col-span-2 space-y-8">
            {/* Description */}
            <PropertyDetailCard heading="About This Property" location="main">
              <Text className="leading-relaxed">{property.description}</Text>
            </PropertyDetailCard>

            {/* Building Specifications */}
            <PropertyDetailCard
              heading="Building Specifications"
              location="main"
            >
              <Grid className="grid-cols-2 md:grid-cols-3 gap-6">
                <Box>
                  <Text size="sm" color="muted">
                    Building Class
                  </Text>
                  <Text size="lg" weight="semibold">
                    Class {property.specifications.buildingClass}
                  </Text>
                </Box>
                <Box>
                  <Text size="sm" color="muted">
                    Year Built
                  </Text>
                  <Text size="lg" weight="semibold">
                    {property.specifications.yearBuilt}
                    {property.specifications.yearRenovated && (
                      <Text as="span" size="sm" color="muted" className="ml-1">
                        (Renovated {property.specifications.yearRenovated})
                      </Text>
                    )}
                  </Text>
                </Box>
                {property.specifications.totalBuildingAreaSqFt > 0 && (
                  <>
                    <Box>
                      <Text size="sm" color="muted">
                        Total Area
                      </Text>
                      <Text size="lg" weight="semibold">
                        {property.specifications.totalBuildingAreaSqFt.toLocaleString()}{" "}
                        SF
                      </Text>
                    </Box>
                    <Box>
                      <Text size="sm" color="muted">
                        Rentable Area
                      </Text>
                      <Text size="lg" weight="semibold">
                        {property.specifications.rentableAreaSqFt.toLocaleString()}{" "}
                        SF
                      </Text>
                    </Box>
                  </>
                )}
                <Box>
                  <Text size="sm" color="muted">
                    Lot Size
                  </Text>
                  <Text size="lg" weight="semibold">
                    {property.specifications.lotSizeAcres} acres
                  </Text>
                </Box>
                {property.specifications.floors > 0 && (
                  <Box>
                    <Text size="sm" color="muted">
                      Floors
                    </Text>
                    <Text size="lg" weight="semibold">
                      {property.specifications.floors}
                    </Text>
                  </Box>
                )}
                <Box>
                  <Text size="sm" color="muted">
                    Zoning
                  </Text>
                  <Text size="lg" weight="semibold">
                    {property.specifications.zoningCode}
                  </Text>
                </Box>
                <Box className="col-span-2">
                  <Text size="sm" color="muted">
                    Parking
                  </Text>
                  <Text size="lg" weight="semibold">
                    {property.specifications.parking.spaces} spaces
                    <Text as="span" size="sm" color="muted" className="ml-1">
                      ({property.specifications.parking.type})
                    </Text>
                  </Text>
                </Box>
              </Grid>
            </PropertyDetailCard>

            {/* Amenities */}
            {property.amenities.length > 0 && (
              <Surface
                as="section"
                variant="filled"
                elevation="sm"
                rounded="lg"
                padding={8}
              >
                <Heading level={2} className="mb-4">
                  Amenities
                </Heading>
                <Flex className="flex-wrap gap-2">
                  {property.amenities.map((amenity) => (
                    <Badge
                      key={amenity}
                      intent="neutral"
                      size="md"
                      className="inline-flex items-center px-3 py-1.5"
                    >
                      <Check className="size-4 mr-1.5 text-success" />
                      {amenity}
                    </Badge>
                  ))}
                </Flex>
              </Surface>
            )}
          </Box>

          {/* Right Column - Pricing & Contact */}
          <Box className="space-y-6">
            {/* Price Card */}
            <Box className="bg-linear-to-br from-success to-success/90 rounded-xl shadow-lg p-6 text-success-content">
              <Text size="sm" className="text-success-content opacity-90">
                {property.listingType === "FOR_SALE"
                  ? "Sale Price"
                  : property.listingType === "FOR_LEASE"
                    ? "Lease Rate"
                    : "Sale Price"}
              </Text>
              <Box className="mt-1">
                <Text
                  size="xl"
                  weight="bold"
                  className="text-3xl text-success-content"
                >
                  {priceDisplay}
                </Text>
                {priceUnit && (
                  <Text
                    size="sm"
                    className="text-success-content opacity-80 ml-1 block mt-1"
                  >
                    {priceUnit}
                  </Text>
                )}
              </Box>

              {property.financials.pricePerSqFt && (
                <Text
                  size="sm"
                  className="text-success-content opacity-90 mt-2"
                >
                  ${property.financials.pricePerSqFt.toFixed(2)} / SF
                </Text>
              )}
            </Box>

            {/* Financial Details */}
            {(property.financials.netOperatingIncome ||
              property.financials.capRatePercentage ||
              property.financials.occupancyRatePercentage) && (
              <PropertyDetailCard
                heading="Financial Details"
                location="sidebar"
              >
                {property.financials.netOperatingIncome && (
                  <PropertyDetailCardRow
                    label="NOI"
                    value={`$${property.financials.netOperatingIncome.toLocaleString()}`}
                  />
                )}
                {property.financials.capRatePercentage && (
                  <PropertyDetailCardRow
                    label="Cap Rate"
                    value={`${property.financials.capRatePercentage}%`}
                  />
                )}
                {property.financials.occupancyRatePercentage && (
                  <PropertyDetailCardRow
                    label="Occupancy"
                    value={`${property.financials.occupancyRatePercentage}%`}
                  />
                )}
              </PropertyDetailCard>
            )}

            {/* Lease Details */}
            {property.financials.leaseInfo && (
              <PropertyDetailCard heading="Lease Details" location="sidebar">
                <PropertyDetailCardRow
                  label="Lease Type"
                  value={property.financials.leaseInfo.leaseType}
                />
                <PropertyDetailCardRow
                  label="Min Divisible"
                  value={`${property.financials.leaseInfo.minDivisibleSqFt.toLocaleString()} SF`}
                />
                <PropertyDetailCardRow
                  label="Max Contiguous"
                  value={`${property.financials.leaseInfo.maxContiguousSqFt.toLocaleString()} SF`}
                />
              </PropertyDetailCard>
            )}

            {/* Broker Contact */}
            <PropertyDetailCard
              heading="Contact Broker"
              location="sidebar"
              className="overflow-hidden"
            >
              <Box className="space-y-3 min-w-0">
                <Box>
                  <Text weight="semibold">{property.brokerContact.name}</Text>
                  <Text size="sm" color="muted">
                    {property.brokerContact.agency}
                  </Text>
                </Box>
                <Box className="pt-3 border-t border-border-muted space-y-2 min-w-0">
                  <Link
                    href={`tel:${property.brokerContact.phone}`}
                    className="flex items-center"
                  >
                    <Phone className="size-4 mr-2" />
                    {property.brokerContact.phone}
                  </Link>
                  <Link
                    href={`mailto:${property.brokerContact.email}`}
                    className="flex items-center wrap-break-word min-w-0"
                  >
                    <Mail className="size-4 mr-2 shrink-0" />
                    <Text as="span" className="break-all">
                      {property.brokerContact.email}
                    </Text>
                  </Link>
                </Box>
                <Text size="xs" color="muted" className="pt-2">
                  License #{property.brokerContact.licenseNumber}
                </Text>
              </Box>
            </PropertyDetailCard>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
