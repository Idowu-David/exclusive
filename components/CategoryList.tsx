import Link from "next/link";

const CATEGORIES = [
  { id: 1, text: "Women's Fashion" },
  { id: 2, text: "Men's Fashion" },
  { id: 3, text: "Electronics" },
  { id: 4, text: "Home & Lifestyle" },
  { id: 5, text: "Medicine" },
  { id: 6, text: "Sports & Outdoor" },
  { id: 7, text: "Baby's & Toys" },
  { id: 8, text: "Health & Beauty" },
];
export default function CategoryList() {
  return (
    <div className="flex flex-col gap-3 md:text-sm text-nowrap">
      {CATEGORIES.map((category) => (
        <Link href="#" key={category.id} className="hover:underline">{category.text}</Link>
      ))}
    </div>
  );
}
