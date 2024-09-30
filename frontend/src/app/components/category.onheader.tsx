import React from "react";

export const categories = [
  {
    cat: "New in",
  },
  {
    cat: "Clothing",
  },
  {
    cat: "Trending",
  },
  {
    cat: "Accesories & Bags",
  },
  {
    cat: "Shoes",
  },
  {
    cat: "Sale",
  },
];

const CategoryOnHeader = ({ cat }: any) => {
  return (
    <div className="dropdown py-5">
      <div className="btn m-1">
        <strong>{cat}</strong>
      </div>
    </div>
  );
};

export default CategoryOnHeader;
