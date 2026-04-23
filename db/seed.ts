// db/seed.ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL!;
const client = postgres(connectionString);
const db = drizzle(client, { schema });

async function main() {
  console.log("Clearing old data...");
  // Delete in reverse order of relationships to prevent foreign key errors
  await db.delete(schema.orderItems);
  await db.delete(schema.orders);
  await db.delete(schema.products);
  await db.delete(schema.categories);
  await db.delete(schema.users);

  console.log("Creating categories...");
  // We use .returning() to get the newly generated UUIDs back from PostgreSQL
  const insertedCategories = await db
    .insert(schema.categories)
    .values([
      { name: "Gaming", slug: "gaming" },
      { name: "Men's Fashion", slug: "mens-fashion" },
      { name: "Electronics", slug: "electronics" },
    ])
    .returning();

  const gamingCatId = insertedCategories.find((c) => c.slug === "gaming")!.id;
  const fashionCatId = insertedCategories.find(
    (c) => c.slug === "mens-fashion",
  )!.id;
  const electronicsCatId = insertedCategories.find(
    (c) => c.slug === "electronics",
  )!.id;

  console.log("Creating Flash Sale & Best Selling Products...");
  await db.insert(schema.products).values([
    // --- Flash Sales ---
    {
      name: "HAVIT HV-G92 Gamepad",
      slug: "havit-hv-g92-gamepad",
      description: "High-performance gaming controller.",
      price: "160.00",
      discountPrice: "120.00",
      stock: 50,
      isFeatured: true,
      images: ["/images/gamepad.png"],
      categoryId: gamingCatId,
    },
    {
      name: "AK-900 Wired Keyboard",
      slug: "ak-900-wired-keyboard",
      description: "Mechanical RGB keyboard.",
      price: "116.00",
      discountPrice: "96.00",
      stock: 30,
      isFeatured: true,
      images: ["/images/keyboard.png"],
      categoryId: gamingCatId,
    },
    {
      name: "IPS LCD Gaming Monitor",
      slug: "ips-lcd-gaming-monitor",
      description: "High refresh rate gaming monitor.",
      price: "400.00",
      discountPrice: "370.00",
      stock: 15,
      isFeatured: true,
      images: ["/images/monitor.png"],
      categoryId: electronicsCatId,
    },
    // --- Best Selling ---
    {
      name: "The North Coat",
      slug: "the-north-coat",
      description: "Warm, durable winter coat.",
      price: "360.00",
      discountPrice: "260.00",
      stock: 40,
      isFeatured: false,
      images: ["/images/coat.png"],
      categoryId: fashionCatId,
    },
    {
      name: "Gucci Duffle Bag",
      slug: "gucci-duffle-bag",
      description: "Luxury travel bag.",
      price: "1160.00",
      discountPrice: "960.00",
      stock: 10,
      isFeatured: false,
      images: ["/images/bag.png"],
      categoryId: fashionCatId,
    },
  ]);

  console.log("Database seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    // Close the connection so the script doesn't hang
    await client.end();
  });
