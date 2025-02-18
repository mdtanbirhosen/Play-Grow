import Navbar from "../../components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import IconicNavBar from "./components/IconicNavBar/IconicNavBar";
import ReadOurBlog from "./components/ReadOurBlog/ReadOurBlog";

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
        <section>
          <ReadOurBlog></ReadOurBlog>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
