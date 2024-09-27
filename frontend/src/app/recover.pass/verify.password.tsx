// "use client";

// import React, { useEffect, useState } from "react";
// import { MailOpen } from "lucide-react";
// import ClipLoader from "react-spinners/ClipLoader";
// const ConfirmPassword = () => {
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 8000);
//   }, []);
//   return (
//     <div>
//       {loading ? (
//         <ClipLoader
//           color={"#00000"}
//           loading={loading}
//           size={50}
//           aria-label="Loading Spinner"
//           data-testid="loader"
//         />
//       ) : (
//         <>
//           <MailOpen />
//           <h1>Баталгаажуулах</h1>
//           <p>
//             “mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу
//           </p>
//           <div className="w-[221px] h-[56px] border-2 border-slate-50 rounded-md">
//             <input type="number" className="w-[56px] h-[56px] " />
//             <input type="number" className="w-[56px] h-[56px]" />
//             <input type="number" className="w-[56px] h-[56px]" />
//             <input type="number" className="w-[56px] h-[56px]" />
//           </div>
//           <p className="text-[14px] text-slate-300">Дахин илгээх</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default ConfirmPassword;
