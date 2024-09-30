const Sidebar = () => {
  return (
    <div className="flex flex-wrap text-[18px] gap-5">
      <div className="flex flex-col gap-2 text-[16px]">
        <h1>
          <strong>Season</strong>
        </h1>

        <button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:bg-slate-500 hover:text-white">
          Winter
        </button>
        <button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:bg-slate-500 hover:text-white">
          Spring
        </button>
        <button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:bg-slate-500 hover:text-white">
          Summer
        </button>
        <button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:bg-slate-500 hover:text-white">
          Autumn
        </button>
      </div>
      <div className="flex flex-col gap-2 text-[16px]">
        <h1>
          <strong>Material</strong>
        </h1>

        <button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:bg-slate-500 hover:text-white">
          Jersey
        </button>
        <button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:bg-slate-500 hover:text-white">
          Faux
        </button>
        <button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:bg-slate-500 hover:text-white">
          Leather
        </button>
        <button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:bg-slate-500 hover:text-white">
          Cotton
        </button>
        <button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:bg-slate-500 hover:text-white">
          Silk
        </button>
        <button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:bg-slate-500 hover:text-white">
          Knit
        </button>
      </div>
      <div className="flex flex-col gap-2 text-[16px]">
        <h1>
          <strong>Size</strong>
        </h1>
        <button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:bg-slate-500 hover:text-white">
          Free
        </button>
        <button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:bg-slate-500 hover:text-white">
          XS
        </button>
        <button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:bg-slate-500 hover:text-white">
          S
        </button>
        <button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:bg-slate-500 hover:text-white">
          M
        </button>
        <button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:bg-slate-500 hover:text-white">
          L
        </button>
        <button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:bg-slate-500 hover:text-white">
          XL
        </button>
        <button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:bg-slate-500 hover:text-white">
          XXL
        </button>
        <button className="btn h-[40px] shadow-lg rounded-xl border border-slate-300  hover:bg-slate-500 hover:text-white">
          XXXL
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
