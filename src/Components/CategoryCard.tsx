import React from "react";

interface CategoryCardProps {
  title: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image }) => {
  return (
    <div className="border-2 m-2 p-1 rounded-lg h-[350px] w-[250px] flex flex-col items-center justify-center">
      <img src={image} alt="" className=" rounded-md h-[200px] w-[200px]" />
      <p>{title}</p>
      <button className="m-2 w-full p-1 px-2 border rounded-md bg-slate-600 text-white hover:px-3 transition-all duration-200">
        Get Quotes
      </button>
    </div>
  );
};

export default CategoryCard;
