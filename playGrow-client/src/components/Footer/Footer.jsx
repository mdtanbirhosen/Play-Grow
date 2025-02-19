import { FaTwitter, FaInstagram, FaFacebook, FaPinterest, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" max-w-7xl mx-auto ">
      <div className=" py-32 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        
        {/* COMPANY SECTION */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-3">Company</h3>
          <ul className="space-y-2">
            <li className="text-[#db915e] list-disc"><a href="#" className="hover:text-black text-[#6E6E6E]">About PlayGrow</a></li>
            <li className="text-[#db915e] list-disc"><a href="#" className="hover:text-black text-[#6E6E6E]">Our Experts</a></li>
            <li className="text-[#db915e] list-disc"><a href="#" className="hover:text-black text-[#6E6E6E]">Services & Prices</a></li>
            <li className="text-[#db915e] list-disc"><a href="#" className="hover:text-black text-[#6E6E6E]">Latest News</a></li>
            <li className="text-[#db915e] list-disc"><a href="#" className="hover:text-black text-[#6E6E6E]">FAQ</a></li>
          </ul>
        </div>

        {/* CUSTOMERS SECTION */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-3">Customers</h3>
          <ul className="space-y-2">
            <li className="text-[#db915e] list-disc"><a href="#" className="hover:text-black text-[#6E6E6E]"> Read Our Advice</a></li>
            <li className="text-[#db915e] list-disc"><a href="#" className="hover:text-black text-[#6E6E6E]"> Get In Touch</a></li>
            <li className="text-[#db915e] list-disc"><a href="#" className="hover:text-black text-[#6E6E6E]"> Online Store</a></li>
            <li className="text-[#db915e] list-disc"><a href="#" className="hover:text-black text-[#6E6E6E]"> Terms & Conditions</a></li>
            <li className="text-[#db915e] list-disc"><a href="#" className="hover:text-black text-[#6E6E6E]"> Ask Away</a></li>
          </ul>
        </div>

        {/* SOCIAL MEDIA SECTION */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-3">Social Media</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaTwitter /> <a href="#" className="hover:text-[#db915e]">Twitter</a>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaInstagram /> <a href="#" className="hover:text-[#db915e]">Instagram</a>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaFacebook /> <a href="#" className="hover:text-[#db915e]">Facebook</a>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <FaPinterest /> <a href="#" className="hover:text-[#db915e]">Pinterest</a>
            </li>
          </ul>
        </div>

        {/* CONTACT SECTION */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-3">Contact</h3>
          <p className="text-sm">Monday to Friday 9 a.m. - 5 p.m.</p>
          <p className="flex items-center gap-2 justify-center md:justify-start mt-2">
            <FaPhone /> 012 34 567 8912
          </p>
          <p className="flex items-center gap-2 justify-center md:justify-start">
            <FaPhone /> 123 45 678 9123
          </p>
          <p className="flex items-center gap-2 justify-center md:justify-start mt-2">
            <FaEnvelope /> playgrow@qodeinteractive.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
