import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Explore the World",
    description: "Discover amazing places with us.",
    image: "https://i.ibb.co.com/GvnF2vGJ/Screenshot-2025-02-13-114833.png",
    style: "bg-white p-4 sm:p-6 rounded-lg shadow-lg text-gray-900",
  },
  {
    title: "Adventure Awaits",
    description: "Find the best adventure tours.",
    image: "https://i.ibb.co.com/0VcsBz8g/Screenshot-2025-02-13-114909.png",
    style: "bg-black bg-opacity-70 p-4 sm:p-6 rounded-full text-white",
  },
  {
    title: "Luxury Stays",
    description: "Enjoy the best luxury hotels.",
    image: "https://i.ibb.co.com/ksXhHbWk/Screenshot-2025-02-13-120430.png",
    style: "bg-white p-4 sm:p-6 rounded-xl text-gray-800 border border-gray-300",
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[650px] sm:h-[500px] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 flex items-center justify-center text-white"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${slides[index].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <motion.div
            className={`p-6 sm:p-8 text-center ${slides[index].style}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
          >
            <motion.h1
              className="text-2xl sm:text-4xl font-bold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
            >
              {slides[index].title}
            </motion.h1>
            <motion.p
              className="mt-2 text-sm sm:text-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            >
              {slides[index].description}
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        className="absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 text-white   p-2 sm:p-2 rounded-full "
        onClick={prevSlide}
      >
        <FaChevronLeft size={20} className="sm:size-24" />
      </button>
      <button
        className="absolute right-3 sm:right-5 top-1/2 transform -translate-y-1/2 text-white   p-2 sm:p-3 rounded-full"
        onClick={nextSlide}
      >
        <FaChevronRight size={20} className="sm:size-24" />
      </button>
    </div>
  );
};

export default Banner;
