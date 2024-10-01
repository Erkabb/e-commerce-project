import Products from "./products";
import Sidebar from "./sidebar";

const Category = () => {
  return (
    <div className="flex justify-center gap-28 my-10">
      <Sidebar />
      <div className=" ">
        <Products />
      </div>
    </div>
  );
};
export default Category;
