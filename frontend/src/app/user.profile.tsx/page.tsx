import Sidebar from "./sidebar";

const UserProfile = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div>
                <h1> Хэрэглэгчийн хэсэг</h1>
                <label className="input input-bordered flex items-center gap-2">
 Нэр
  <input type="text" className="grow" placeholder="Нэр" />
  
                </label>
                <label className="input input-bordered flex items-center gap-2">
 Овог
  <input type="text" className="grow" placeholder="Овог" />
  
</label>
<label className="input input-bordered flex items-center gap-2">
 Имэйл
  <input type="text" className="grow" placeholder="Имэйл" />
</label>
                <label className="input input-bordered flex items-center gap-2">
                    Утасны дугаар
  <input type="number" className="grow" placeholder="Утасны дугаар" />

</label>
                <label className="input input-bordered flex items-center gap-2">
                    Хаяг
  <input type="text" className="grow" placeholder="Хаяг" />

</label>
            </div>
        </div>
    )
}
export default UserProfile;