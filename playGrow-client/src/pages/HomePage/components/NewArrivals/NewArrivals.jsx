import { useEffect, useState } from "react";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import ReuseableHeader from "../../../../components/ReuseableHeader/ReuseableHeader";
import axios from "axios";

const NewArrivals = () => {
    const [carriage, setCarriage] = useState([]);
    useEffect(() => {
        
        axios.get('http://localhost:5000/products?category=Carriage')
        .then(data => setCarriage(data.data))
    }, []);
    console.log(carriage)
  return (
    <div>
      <ReuseableHeader
        title={"NEW ARRIVALS"}
        subtitle={
          "Consectetur adipiscing elit ut aliquam duis convalli convalli tellus id interdum ve."
        }
      ></ReuseableHeader>
      <div>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default NewArrivals;
