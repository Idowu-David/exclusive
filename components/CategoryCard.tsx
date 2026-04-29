import { ElementType } from "react"

interface CategoryCardProps {
  title: string;
  Icon: ElementType;
  isActive?: boolean;
  onClick: () => void;
}

export default function CategoryCard({ title, Icon, isActive = false, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-34 h-30 text-sm rounded border transition-all duration-200 group ${
        isActive
          ? "bg-[#D84444] text-white border-[#D84444] shadow-md"
          : "bg-white text-black border-gray-300 hover:bg-[#D84444] hover:text-white hover:border-[#D84444]"
      }`}
    >
      <Icon className="w-8 h-8 mb-4 stroke-[1.5px]" />
      <span className="font-medium">{title}</span>
    </button>
  );
}