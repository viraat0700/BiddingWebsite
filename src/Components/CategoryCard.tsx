import React from "react";

interface CategoryCardProps {
  title: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image }) => {
  return (
    <>
      <div className="border border-black mx-1 p-1 rounded-lg h-[350px] w-[250px] flex flex-col  items-center justify-center">
        <div className="">
          <img src={image} alt="" className=" rounded-md h-[200px] w-[200px] mb-2" />
          <p className="font-semibold text-center">{title}</p>
        </div>
        <button className="mt-2 p-1 w-full px-2 border rounded-md bg-slate-600 text-white hover:px-3 transition-all duration-200">
          Get Quotes
        </button>
      </div>
    </>
  );
};

export default CategoryCard;
