

import Hamburger from 'hamburger-react';
import { useState } from 'react';

const Dropdown = () => {
   
  const [open, setOpen] = useState(false);

console.log(open)

 

  return (
    <div >
      {/* <Button sx={{color:'black',":hover":{color:"red",background:"none",":hover":{background:"none"}},transition: "color 0.3s ease, background 0.3s ease",}}> */}
        <Hamburger toggled={open} toggle={setOpen}></Hamburger>
      
      <div className='mt-'>
      
      </div>
    </div>
  );

};

export default Dropdown;

