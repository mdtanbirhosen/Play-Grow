import Navbar from "../../components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import HappyCustomer from "./components/HappyCustomer/HappyCustomer";
import IconicNavBar from "./components/IconicNavBar/IconicNavBar";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import ReadOurBlog from "./components/ReadOurBlog/ReadOurBlog";
import NEWSLETTER from "./NEWSLETTER/NEWSLETTER";

const HomePage = () => {
  return (
    <div className="">
      <header>
        <Navbar></Navbar>
        <div className="max-w-7xl mx-auto hidden lg:block">
          <IconicNavBar></IconicNavBar>
        </div>
      </header>
      <main>
        <section className="max-w-[90%] md:max-w-[80%] mx-auto my-10">
          <Banner></Banner>
        </section>
        <section className="max-w-7xl mx-auto">
          <ReadOurBlog></ReadOurBlog>
        </section>
        <section className="">
          <HappyCustomer></HappyCustomer>
        </section>
        <section>
          <NEWSLETTER></NEWSLETTER>
        </section>
        <section>
          <NewArrivals></NewArrivals>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
