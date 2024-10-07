import React from "react";

export const categories = [
  {
    cat: "Pick A Mood",
    subCat: "Feeling Minimalist",
  },
  {
    cat: "Clothing",
    subCat: "Bottoms",
  },
  {
    cat: "Trending",
    subCat: "Leopard Fever",
  },
  {
    cat: "Accesories & Bags",
    subCat: "Jewelry",
  },
  {
    cat: "Shoes",
    subCat: "Heels",
  },
  {
    cat: "Sale",
    subCat: "Season",
  },
];

const CategoryOnHeader = ({ cat, subCat }: any) => {
  return (
    <div className="dropdown py-5">
      <div className="btn m-1 menu-horizontal flex-none">
        <details className="no-underline">
          <summary key={cat}>
            {" "}
            <strong>{cat}</strong>
          </summary>

          <ul className="bg-base-100 rounded-t-none p-2 bg-black text-[16px]">
            <li>
              <a key={subCat}>
                <strong>{subCat}</strong>
              </a>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default CategoryOnHeader;
