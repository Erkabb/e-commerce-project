import { Trash2 } from "lucide-react";
const Wishlist = () => {
  return (
    <div className="w-full h-full flex flex-col items-center my-10 gap-10">
      <div className="flex text-white gap-32">
        <input
          type="radio"
          name="radio-2"
          className="radio radio-primary w-[30px] h-[30px]"
          placeholder="1"
          defaultChecked
        />
        <input
          type="radio"
          name="radio-2"
          className="radio radio-primary w-[30px] h-[30px]"
          placeholder="2"
        />
        <input
          type="radio"
          name="radio-2"
          className="radio radio-primary w-[30px] h-[30px]"
          placeholder="3"
        />
      </div>
      <div className="w-[700px] h-[650[px] rounded-3xl flex flex-col gap-5 border border-2-slate-100 shadow-md px-5 py-5 ">
        <h1 className="text-[24px]">
          <strong>Сагс</strong>
        </h1>

        <div className="w-[600px] h-[132px] flex  border border-2-slate-100 rounded-2xl shadow-md items-center justify-evenly gap-24">
          <div className="flex gap-10">
            <img
              src=""
              alt=""
              className="w-[110px] h-[110px] rounded-2xl"
            />

            <div className="flex flex-col gap-2 text-black">
              <h1 className="">
                <strong></strong>
              </h1>
              <input
                type="number"
                className="w-[40px] h-[32px]"
                placeholder="1"
              />

              <h1 className="text-[18px]">
                <strong>₮</strong>
              </h1>
            </div>
          </div>
          <div>
            {" "}
            <Trash2 size={24} />
          </div>
        </div>

        <h1 className="flex justify-between pl-5 pr-16">
          <p>
            <strong>Нийт төлөх дүн:</strong>
          </p>
          <p>
            <strong>₮</strong>
          </p>
        </h1>
      </div>
    </div>
  );
};
export default Wishlist;
