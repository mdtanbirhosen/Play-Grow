import { Link } from "react-router-dom";
import shopIcon from "../../../../assets/icons/shopIcon.png";
import aboutIcon from "../../../../assets/icons/aboutIcon.png";
import logoText from "../../../../assets/icons/logoText.png";
import wishList from "../../../../assets/icons/wishList.png";
import cartIcon from "../../../../assets/icons/cartIcon.png";
const IconicNavBar = () => {
  return (
    <div className="max-w-7xl py-20 flex justify-between px-5 items-center">
      {/* shop link */}
      <Link>
        <div className="flex flex-col items-center ">
          <div>
            <img src={shopIcon} className="" alt="" />
          </div>
          <div>NEW IN</div>
        </div>
      </Link>

      {/* About US link */}
      <Link>
        <div className="flex flex-col items-center justify-around">
          <div>
            <img src={aboutIcon} className="" alt="" />
          </div>
          <div>ABOUT US</div>
        </div>
      </Link>

      {/* logo Text link */}
      <Link>
        <div className="flex flex-col items-center justify-around">
          <div>
            <img src={logoText} className="w-56 h-16" alt="" />
          </div>
          <div></div>
        </div>
      </Link>
      {/* wishList link */}
      <Link>
        <div className="flex flex-col items-center justify-around">
          <div>
            <img src={wishList} className="" alt="" />
          </div>
          <div>NEW IN</div>
        </div>
      </Link>
      {/* cartIcon link */}
      <Link>
        <div className="flex flex-col items-center justify-around">
          <div>
            <img src={cartIcon} className="" alt="" />
          </div>
          <div>NEW IN</div>
        </div>
      </Link>
    </div>
  );
};

export default IconicNavBar;
