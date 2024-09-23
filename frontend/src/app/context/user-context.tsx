// "use client";

// import React, { createContext, ProviderProps, useState } from "react";
// import axios from "axios";
// type UserProvider = {
//   value: PropertyKey;
//   children: React.ReactNode;
// };

// export const UserContext = createContext(null);

// export const UserProvider = ({ children }: UserProvider) => {
//   const [user, setUser] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//   });

//   const fetchUserData = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get(
//         `http://localhost:8000/api/v1/auth/signup`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 200) {
//         setUser(response.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <UserContext.Provider value={{ user, fetchUserData }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
