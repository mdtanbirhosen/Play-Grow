import { NavLink } from "react-router-dom";
import ShopLinks from "./shopLinks/ShopLinks";
import BlogLinks from "./BlogLinks/BlogLinks";
import HomeLinks from "./HomeLinks/HomeLinks";

const NavLinks = () => {

  return (
    <div className="flex gap-16">
      {/* Home Links */}
      <HomeLinks></HomeLinks>
      {/* pages Links */}
      <div className="dropdown group dropdown-hover">
        <div
          tabIndex={0}
          role="button"
          className="flex flex-col items-center py-[18px]"
        >
          <div>PAGES</div>
          <div className="flex gap-2">
            <span className="h-1 w-1 bg-none group-hover:bg-orange-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 [animation-delay:1500ms]"></span>
            <span className="h-1 w-1 bg-none group-hover:bg-orange-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 [animation-delay:1000ms]"></span>
            <span className="h-1 w-1 bg-none group-hover:bg-orange-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 [animation-delay:500ms]"></span>
            <span className="h-1 w-1 bg-none group-hover:bg-orange-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 [animation-delay:0ms]"></span>
          </div>
        </div>

        {/* Dropdown Menu */}
        <ul
          tabIndex={0}
          className="dropdown-content bg-base-100 top-[64px] z-[1] w-52 p-5 shadow list-none "
        >
          <li className="p-0 my-2">
            <NavLink
              to={"/aboutUs"}
              className="group/item flex items-center gap-2 hover:translate-x-2 transition-all duration-300 hover:bg-transparent p-0 m-0 "
            >
              <span className="h-1 w-1 bg-orange-400 rounded-full opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"></span>
              About Us
            </NavLink>
          </li>
          <li className="p-0 my-2">
            <NavLink
              to={"/faqPage"}
              className="group/item flex items-center gap-2 hover:translate-x-2 transition-all duration-300 hover:bg-transparent p-0 m-0 hover:font-medium"
            >
              <span className="h-1 w-1 bg-orange-400 rounded-full opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"></span>
              FAQ page
            </NavLink>
          </li>
          <li className="p-0 my-2">
            <NavLink
              to={"/contactUs"}
              className="group/item flex items-center gap-2 hover:translate-x-2 transition-all duration-300 hover:bg-transparent p-0 m-0 hover:font-medium"
            >
              <span className="h-1 w-1 bg-orange-400 rounded-full opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"></span>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      {/* SHOP Links */}
      <ShopLinks></ShopLinks>
      {/* blog Links */}
      <BlogLinks></BlogLinks>
    </div>
  );
};

export default NavLinks;
