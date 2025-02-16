
const navLinks =(
    <div className="flex gap-16">
      {/* home links */}
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="">
          HOME
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 top-11   z-[1] w-52 p-2 shadow"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>

      {/* pages links */}
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="">
          PAGES
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 top-11 z-[1] w-52 p-2 shadow"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>

      {/* shop links */}
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="">
          SHOP
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 top-11 z-[1] w-52 p-2 shadow"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>

        {/* blog links */}
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className=" h-full">
          BLOG
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 top-11 z-[1] w-52 p-2 shadow"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
    
  );

export default navLinks;