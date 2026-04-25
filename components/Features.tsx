import { Truck, Headphones, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: Truck,
    label: "Fast Delivery",
    text: "Free delivery for all delivery over $140",
  },
  {
    icon: Headphones,
    label: "24/7 Customer Service",
    text: "Friendly 24/7 customer support",
  },
  {
    icon: BadgeCheck,
    label: "Money Back Guarantee",
    text: "We return money within 30 days",
  },
];

export default function Features() {
  return (
    <div className="inline-flex items-center gap-8">
      {features.map(({ icon: Icon, label, text }) => (
        <div key={label} className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
            <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
          <span className="text-xl font-semibold uppercase tracking-wide text-center">
            {label}
          </span>
          <span className="">{text}</span>
        </div>
      ))}
    </div>
  );
}
