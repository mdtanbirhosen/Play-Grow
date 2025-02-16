import mailImg from "../../assets/icons/mailIcon.png";
import SocialLinks from "../SocialLinks/SocialLinks";
import Dropdown from "./Dropdown/Dropdown";
import navLinks from "./NavLinks/NavLinks";
import { CiSearch } from "react-icons/ci";
import cartIcon from "../../assets/icons/cartIcon.png";
const Navbar = () => {
  return (
    <div>
      <div className="navbar py-0 px-8 lg:bg-[#F7F3F0] border-b border-[#ECCCB6] lg:border-none">
        <div className="navbar-start">
          <div className="flex items-center gap-2 text-sm">
            <img src={mailImg} alt="" />
            <span>NEWSLETTER</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">{navLinks}</div>
        <div className="navbar-end items-center ">
          {/* hidden items for small device */}
          <div className="hidden lg:flex">
            {/* search button */}
            <div className="flex  items-center gap-1  mr-5">
              <CiSearch className="text-xl"></CiSearch>
              <span> SEARCH</span>
            </div>
            {/* social links */}
            <SocialLinks />
          </div>
          {/* hidden on full screen */}
          <div className="flex lg:hidden">
            {/* cart button */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <img src={cartIcon} className="h-10" alt="cart icon" />
                <div className="text-xs px-1 rounded-full border-white bg-[#F8F4EC] border-4 absolute top-0 left-8">0</div>
              </div>
              <div>CART $0.0</div>
            </div>
            {/* dropdown content */}
            <Dropdown></Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// <div className="dropdown">
//             <div tabIndex={0} className="  lg:hidden">
//               <Hamburger toggled={isOpen} toggle={setIsOpen}></Hamburger>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//             >
//               <li>
//                 <a>Item 1</a>
//               </li>
//               <li>
//                 <a>Parent</a>
//                 <ul className="p-2">
//                   <li>
//                     <a>Submenu 1</a>
//                   </li>
//                   <li>
//                     <a>Submenu 2</a>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a>Item 3</a>
//               </li>
//             </ul>
//           </div>
