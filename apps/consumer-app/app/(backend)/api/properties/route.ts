import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {
  getAllProperties,
  createProperty,
} from "@/models/property/property.service";

/**
 * API Route for properties
 * 
 * Use this endpoint for:
 * - Client-side fetches (from Client Components)
 * - External API calls
 * - Webhooks
 * 
 * Note: Server Components should directly import from @/models/property/property.service
 * instead of making HTTP calls to this API route.
 */

export async function GET() {
  const data = await getAllProperties();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const newProperty = {
      ...body,
      id: `prop_${Date.now()}`,
      status: "ACTIVE",
      metadata: {
        createdDate: new Date().toISOString(),
        views: 0,
      },
    };

    await createProperty(newProperty);
    revalidatePath("/properties");

    return NextResponse.json(newProperty, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error saving data" }, { status: 500 });
  }
}
