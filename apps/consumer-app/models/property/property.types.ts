interface PropertyLocation {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  county: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

interface PropertySpecs {
  buildingClass: "A" | "B" | "C";
  yearBuilt: number;
  yearRenovated?: number;
  totalBuildingAreaSqFt: number;
  rentableAreaSqFt: number;
  lotSizeAcres: number;
  floors: number;
  zoningCode: string;
  parking: {
    ratio: number;
    spaces: number;
    type: string;
  };
}

interface LeaseInfo {
  leaseRate: number;
  leaseRateUnit: "USD/SF/YEAR" | "USD/SF/MONTH";
  leaseType: "NNN" | "GROSS" | "MODIFIED_GROSS";
  minDivisibleSqFt: number;
  maxContiguousSqFt: number;
}

interface PropertyFinancials {
  salePrice?: number;
  pricePerSqFt?: number;
  netOperatingIncome?: number;
  capRatePercentage?: number;
  occupancyRatePercentage?: number;
  leaseInfo?: LeaseInfo;
}

interface PropertyMedia {
  id: string;
  type: "IMAGE" | "FLOOR_PLAN" | "VIDEO" | "VIRTUAL_TOUR";
  url: string;
  altText?: string;
  label?: string;
  isPrimary?: boolean;
}

interface BrokerContact {
  name: string;
  agency: string;
  phone: string;
  email: string;
  licenseNumber: string;
}

interface PropertyMetadata {
  createdDate: string;
  lastUpdated: string;
  views: number;
}

export interface CommercialProperty {
  id: string;
  listingType: "FOR_SALE" | "FOR_LEASE" | "BOTH";
  propertyType: "OFFICE" | "RETAIL" | "INDUSTRIAL" | "MULTIFAMILY" | "LAND";
  status: "ACTIVE" | "PENDING" | "SOLD" | "OFF_MARKET";
  title: string;
  slug: string;
  description: string;
  location: PropertyLocation;
  specifications: PropertySpecs;
  financials: PropertyFinancials;
  amenities: string[];
  media: PropertyMedia[];
  brokerContact: BrokerContact;
  metadata: PropertyMetadata;
}
