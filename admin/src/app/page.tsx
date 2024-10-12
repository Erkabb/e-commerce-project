import Link from "next/link";

export default function Home() {
  return <div className="w-full h-full flex flex-col items-center gap-10 bg-slate-100 py-80">
    <h1 className="text-[40px]"><strong>E-COMMERCE</strong></h1>
    <div className="flex flex-col gap-7 text-center bg-white py-5 w-[500px] h-[498px] items-center rounded-3xl">
      <h1 className="text-[40px]"><strong>Sign in</strong></h1>
      <input
            type="text"
            className="input  border-2 border-slate-100  w-[400px] h-[60px] rounded-3xl bg-white pl-2"
            placeholder="Имэйл хаяг"
           
          />

          <input
            type="text"
            className="input border-2 border-slate-100 rounded-3xl w-[400px] h-[60px]  bg-white pl-2"
            placeholder="Нууц үг"
           
      />
      <Link href={"/recover.pass"}>
            <button className="text-[20px] text-center">
              Нууц үг мартсан
            </button>
      </Link>
      
      <button
            className="btn btn-wide bg-blue-700  w-[400px] h-[60px] border-2 rounded-3xl text-white"
            
          >
            Нэвтрэх
          </button>
    </div>
    <div className="text-center">
      <p>Not a member?</p>
      <Link href={""}>Sign up</Link>
    </div>
  </div>
}