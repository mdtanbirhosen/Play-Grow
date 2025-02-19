import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import CribsBaskets from "./components/Cribs&Baskets/CribsBaskets";
import Gallery from "./components/Gallery/Gallery";
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
      <div>
        <section className="max-w-[90%] md:max-w-[80%] mx-auto my-10">
          <Banner></Banner>
        </section>
      </div>
      <main className="relative">
        <div className="w[60px] h-[50px] fixed z-10 right-5 bottom-12">
          <img src="https://i.ibb.co.com/20mZMwtH/Screenshot-2025-02-19-175338.png" className="w-[80px] h-full" alt="" />
        </div>
        <section className="max-w-7xl mx-auto">
          <CribsBaskets></CribsBaskets>
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
        <section className="max-w-7xl mx-auto">
          <NewArrivals></NewArrivals>
        </section>
        <section>
          <Gallery></Gallery>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomePage;
