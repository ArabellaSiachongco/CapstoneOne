// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { styles } from "../styles";
// import { navLinks } from "../constants";

// const NavbarTop = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setScrolled(scrollTop > 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 
//         ${scrolled ? "bg-primary" : "bg-transparent"}`}
//     >
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
//         {/* Desktop navigation */}
//         <ul className="list-none hidden sm:flex flex-row gap-10">
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${
//                 active === nav.title ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(nav.title)}
//             >
//               <Link to={nav.id}>{nav.title}</Link>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile menu icon */}
//         <div className="sm:hidden flex flex-1 justify-end items-center">
//           <button
//             onClick={() => setToggle(!toggle)}
//             className="focus:outline-none"
//           >
//             <span className="text-white text-[20px]">☰</span>
//           </button>

//           {/* Mobile navigation dropdown */}
//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
//               {navLinks.map((nav) => (
//                 <li
//                   key={nav.id}
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                     active === nav.title ? "text-white" : "text-secondary"
//                   }`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(nav.title);
//                   }}
//                 >
//                   <Link to={nav.id}>{nav.title}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavbarTop;
