import Hamburger from "hamburger-react";
import { useState } from "react";

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
        <div className="absolute top-0 left-0 w-full -z-10 mt-16">
          <h1 className="text-5xl text-red-500">nav links</h1>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
