import fs from "fs/promises";
import path from "path";
import { type CommercialProperty } from "./property.types";

/**
 * Note: this will only work in local development
 * - In production, you would use a database like PostgreSQL or MongoDB
 */
const DB_PATH = path.join(process.cwd(), "data", "properties.json");

async function readDb(): Promise<CommercialProperty[]> {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeDb(data: CommercialProperty[]) {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
}

export async function getAllProperties() {
  return await readDb();
}

export async function getPropertyById(id: string) {
  const properties = await readDb();
  return properties.find((p) => p.id === id);
}

export async function createProperty(newProp: CommercialProperty) {
  const properties = await readDb();
  properties.push(newProp);
  await writeDb(properties);
  return newProp;
}
