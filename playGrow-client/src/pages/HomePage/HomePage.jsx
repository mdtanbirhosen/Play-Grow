import Navbar from "../../components/Navbar/Navbar";
import IconicNavBar from "./components/IconicNavBar/IconicNavBar";

const HomePage = () => {
  return (
    <div className="">
      <header>
        <Navbar></Navbar>
        <div className="max-w-7xl mx-auto hidden lg:block">
          <IconicNavBar></IconicNavBar>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
