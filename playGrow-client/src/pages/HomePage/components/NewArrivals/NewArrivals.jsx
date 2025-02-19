import { useEffect, useState } from "react";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import ReuseableHeader from "../../../../components/ReuseableHeader/ReuseableHeader";
import axios from "axios";

const NewArrivals = () => {
  const [carriages, setCarriages] = useState([]);
  useEffect(() => {

    axios.get('https://v0-play-grow-server.vercel.app/products')
      .then(data => setCarriages(data.data))
  }, []);
  console.log(carriages.length)
  const filter = carriages.filter(carriage => carriage.category === 'Carriage')
  return (
    <div className="mt-28 mb-20">
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <ReuseableHeader
          title={"NEW ARRIVALS"}
          subtitle={
            "Consectetur adipiscing elit ut aliquam duis convalli convalli tellus id interdum ve."
          }
        ></ReuseableHeader>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 items-center justify-center lg:gap-8 mx-auto">
        {filter.map(carriage => <div key={carriage._id}>
          <ProductCard carriage={carriage}></ProductCard>
        </div>)}
      </div>
    </div>
  );
};

export default NewArrivals;
