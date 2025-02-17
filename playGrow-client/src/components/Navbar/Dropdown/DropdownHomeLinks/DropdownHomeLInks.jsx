import { NavLink, useLocation } from "react-router-dom";

const DropdownHomeLInks = () => {
  const { pathname } = useLocation();
  const currentlyHere =
    pathname === "/" ||
    pathname === "/kidsStore" ||
    pathname === "/landing" ||
    pathname === "/shopGrid" ||
    pathname === "/babyShop";
  return (
    <div className="collapse collapse-arrow group">
      <input type="checkbox" />
      <div className="collapse-title  font-medium">
        <div>HOME</div>
        <div className="flex gap-2">
          <span
            className={`h-1 w-1 bg-none ${
              currentlyHere ? "bg-orange-400" : "group-hover:bg-orange-400"
            } rounded-full animate-pulse opacity-0 ${
              currentlyHere ? "opacity-100" : "group-hover:opacity-100"
            } [animation-delay:1500ms]`}
          ></span>
          <span
            className={`h-1 w-1 bg-none ${
              currentlyHere ? "bg-orange-400" : "group-hover:bg-orange-400"
            } rounded-full animate-pulse opacity-0 ${
              currentlyHere ? "opacity-100" : "group-hover:opacity-100"
            } [animation-delay:1000ms]`}
          ></span>
          <span
            className={`h-1 w-1 bg-none ${
              currentlyHere ? "bg-orange-400" : "group-hover:bg-orange-400"
            } rounded-full animate-pulse opacity-0 ${
              currentlyHere ? "opacity-100" : "group-hover:opacity-100"
            } [animation-delay:500ms]`}
          ></span>
          <span
            className={`h-1 w-1 bg-none ${
              currentlyHere ? "bg-orange-400" : "group-hover:bg-orange-400"
            } rounded-full animate-pulse opacity-0 ${
              currentlyHere ? "opacity-100" : "group-hover:opacity-100"
            } [animation-delay:0ms]`}
          ></span>
        </div>
      </div>
      <div className="collapse-content">
        <ul className="  z-[1]    list-none  w-full">
          <li className="p-0 my-2">
            <NavLink
              to={"/"}
              className="group/item flex items-center gap-2 hover:translate-x-2 transition-all duration-300 hover:bg-transparent p-0 m-0 "
            >
              <span className="h-1 w-1 bg-orange-400 rounded-full opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"></span>
              Main Home
            </NavLink>
          </li>
          <li className="p-0 my-2">
            <NavLink
              to={"/kidsStore"}
              className="group/item flex items-center gap-2 hover:translate-x-2 transition-all duration-300 hover:bg-transparent p-0 m-0 hover:font-medium"
            >
              <span className="h-1 w-1 bg-orange-400 rounded-full opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"></span>
              Kids Store
            </NavLink>
          </li>
          <li className="p-0 my-2">
            <NavLink
              to={"/babyShop"}
              className="group/item flex items-center gap-2 hover:translate-x-2 transition-all duration-300 hover:bg-transparent p-0 m-0 hover:font-medium"
            >
              <span className="h-1 w-1 bg-orange-400 rounded-full opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"></span>
              Baby Shop
            </NavLink>
          </li>
          <li className="p-0 my-2">
            <NavLink
              to={"/shopGrid"}
              className="group/item flex items-center gap-2 hover:translate-x-2 transition-all duration-300 hover:bg-transparent p-0 m-0 hover:font-medium"
            >
              <span className="h-1 w-1 bg-orange-400 rounded-full opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"></span>
              Shop Grid
            </NavLink>
          </li>
          <li className="p-0 my-2">
            <NavLink
              to={"/landing"}
              className="group/item flex items-center gap-2 hover:translate-x-2 transition-all duration-300 hover:bg-transparent p-0 m-0 hover:font-medium"
            >
              <span className="h-1 w-1 bg-orange-400 rounded-full opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"></span>
              Landing
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownHomeLInks;
