import { Suspense } from "react";
import { getAllProperties } from "@/models/property/property.service";
import { PropertiesLayout } from "./components/properties-layout";
import { PropertiesLayoutLoading } from "./components/properties-layout-loading";

export const revalidate = 0;

export default async function Home() {
  const properties = await getAllProperties();

  return (
    <Suspense fallback={<PropertiesLayoutLoading />}>
      <PropertiesLayout properties={properties} />
    </Suspense>
  );
}
