import Hamburger from 'hamburger-react';
import { useState } from 'react';

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="block"> 
        <Hamburger
          toggled={open}
          toggle={setOpen}
          size={30} // Default size
          className="sm:size-20 md:size-24 lg:size-30" // Responsive sizes
        />
      </div>
    </div>
  );
};

export default Dropdown;
