const Sidebar = () => {
  return (
    <div className="flex flex-col items-center text-[20px] gap-5">
      <button className="btn w-[240px] h-[45px] rounded-xl bg-gray-100 hover:bg-white shadow-md">
        <strong>Хэрэглэгчийн хэсэг</strong>
      </button>
      <button className="btn w-[240px] h-[45px] rounded-xl bg-gray-100 hover:bg-white shadow-md">
        <strong>Захиалгын түүх</strong>
      </button>
    </div>
  );
};
export default Sidebar;
