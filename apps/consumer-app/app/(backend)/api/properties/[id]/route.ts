import { NextResponse } from "next/server";
import { getPropertyById } from "@/models/property/property.service";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const property = getPropertyById(id);

  if (!property) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return NextResponse.json(property);
}
