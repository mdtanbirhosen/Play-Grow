import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ShopLinks = () => {
  return (
    <div className="relative group">
      {/* Button */}
      <div
        tabIndex={0}
        role="button"
        className="flex flex-col items-center py-[18px] cursor-pointer"
      >
        <div>SHOP</div>
        <div className="flex gap-2">
          <span className="h-1 w-1 bg-none group-hover:bg-orange-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 [animation-delay:1500ms]"></span>
          <span className="h-1 w-1 bg-none group-hover:bg-orange-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 [animation-delay:1000ms]"></span>
          <span className="h-1 w-1 bg-none group-hover:bg-orange-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 [animation-delay:500ms]"></span>
          <span className="h-1 w-1 bg-none group-hover:bg-orange-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 [animation-delay:0ms]"></span>
        </div>
      </div>

      {/* Dropdown Menu */}
      <ul className="absolute hidden group-hover:block bg-base-100 top-[64px] z-10 w-52 p-4 shadow list-none transition-all duration-300">
        <li className="relative group/item my-2">
          <NavLink
            to="/shopList"
            className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300 hover:bg-transparent"
          >
            <span className="h-1 w-1 bg-orange-400 rounded-full opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"></span>
            Shop List
          </NavLink>
        </li>
        <li className="relative group/item my-2">
          <NavLink
            to="/shopSingle"
            className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300 hover:bg-transparent"
          >
            <span className="h-1 w-1 bg-orange-400 rounded-full opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"></span>
            Shop Single
          </NavLink>
        </li>

        {/* Nested Dropdown */}
        <li className="relative">
          <div
            tabIndex={0}
            role="button"
            className="peer flex items-center gap-2 hover:translate-x-2 transition-all duration-300 hover:bg-transparent cursor-pointer"
          >
            <span className="h-1 w-1 bg-orange-400 rounded-full opacity-0 transition-opacity duration-300 peer-hover:opacity-100"></span>
            Shop Layouts <span className="flex  justify-end"><FaAngleRight /></span>
          </div>
          



          {/* Submenu */}
          <ul className="absolute hidden peer-hover:block bg-base-100 left-full top-0 w-52 p-4 shadow list-none transition-all duration-300">
            <li className="relative group/item my-2">
              <NavLink
                to="/threeColumns"
                className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300 hover:bg-transparent"
              >
                <span className="h-1 w-1 bg-orange-400 rounded-full opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"></span>
                Three Columns
              </NavLink>
            </li>
            <li className="relative group/item my-2">
              <NavLink
                to="/fourColumns"
                className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300 hover:bg-transparent"
              >
                <span className="h-1 w-1 bg-orange-400 rounded-full opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"></span>
                Four Columns
              </NavLink>
            </li>
            <li className="relative group/item my-2">
              <NavLink
                to="/FiveColumnsWide"
                className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300 hover:bg-transparent"
              >
                <span className="h-1 w-1 bg-orange-400 rounded-full opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"></span>
                Five Columns Wide
              </NavLink>
            </li>
            <li className="relative group/item my-2">
              <NavLink
                to="/SixColumnsWide"
                className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300 hover:bg-transparent"
              >
                <span className="h-1 w-1 bg-orange-400 rounded-full opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"></span>
                Six Columns Wide
              </NavLink>
            </li>
           
          </ul>
        </li>

        <li className="relative group/item my-2">
          
          <div
            tabIndex={0}
            role="button"
            className="peer flex items-center gap-2 hover:translate-x-2 transition-all duration-300 hover:bg-transparent cursor-pointer w-full"
          >
            <span className="h-1 w-1 bg-orange-400 rounded-full opacity-0 transition-opacity duration-300 peer-hover:opacity-100"></span>
            Shop Pages <span className="flex  justify-end"><FaAngleRight /></span>
          </div>
          



          {/* Submenu */}
          <ul className="absolute hidden peer-hover:block bg-base-100 left-full top-0 w-52 p-4 shadow list-none transition-all duration-300">
            <li className="relative group/item my-2">
              <NavLink
                to="/threeColumns"
                className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300 hover:bg-transparent"
              >
                <span className="h-1 w-1 bg-orange-400 rounded-full opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"></span>
                Three Columns
              </NavLink>
            </li>
            <li className="relative group/item my-2">
              <NavLink
                to="/fourColumns"
                className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300 hover:bg-transparent"
              >
                <span className="h-1 w-1 bg-orange-400 rounded-full opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"></span>
                Four Columns
              </NavLink>
            </li>
            <li className="relative group/item my-2">
              <NavLink
                to="/FiveColumnsWide"
                className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300 hover:bg-transparent"
              >
                <span className="h-1 w-1 bg-orange-400 rounded-full opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"></span>
                Five Columns Wide
              </NavLink>
            </li>
            <li className="relative group/item my-2">
              <NavLink
                to="/SixColumnsWide"
                className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300 hover:bg-transparent"
              >
                <span className="h-1 w-1 bg-orange-400 rounded-full opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"></span>
                Six Columns Wide
              </NavLink>
            </li>
           
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ShopLinks;
