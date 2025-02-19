import Hamburger from "hamburger-react";
import { useState } from "react";
import DropdownLinks from "./DropdownLinks/DropdownLinks";

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="block z-50">
        <Hamburger
          toggled={open}
          toggle={setOpen}
          size={30} // Default size
          className="sm:size-20 md:size-24 lg:size-30" // Responsive sizes
        />
      </div>
      {open && (
        <div className="absolute top-0 left-0 z-50 w-full bg-white mt-16">
          <div>
            <DropdownLinks></DropdownLinks>


          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
