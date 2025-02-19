import { useEffect, useState } from "react";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import ReuseableHeader from "../../../../components/ReuseableHeader/ReuseableHeader";
import axios from "axios";

const CribsBaskets = () => {
  const [carriages, setCarriages] = useState([]);

  useEffect(() => {
    axios.get("https://v0-play-grow-server.vercel.app/products")
      .then(response => setCarriages(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const filter = carriages.filter(carriage => carriage.category === 'Carriage')
  return (
    <div className="mt-28 mb-20">
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <ReuseableHeader
          title={"CRIBS & BASKETS"}
          subtitle={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp."
          }
        ></ReuseableHeader>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 items-center justify-center md:gap-4 lg:gap-8 mx-auto">
        {filter.map((carriage) => (
          <div key={carriage._id}>
            <ProductCard carriage={carriage}></ProductCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CribsBaskets;
