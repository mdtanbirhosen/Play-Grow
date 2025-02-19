import Button from "../Button/Button";

// eslint-disable-next-line react/prop-types
const  ProductCard = ({ carriage }) => {
  // eslint-disable-next-line react/prop-types
  const { name, price, category, image } = carriage;

  return (
    <div className="relative w-[302px] p-4 bg-white cursor-pointer rounded-xl overflow-hidden transition-all group">
      {/* Animated Dashed Border */}
      <div className="absolute inset-0 rounded-xl border border-gray-400 opacity-50"></div>

      {/* Product Image with Zoom Effect */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-[240px] object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">{category}</p>
        <h3 className="text-lg font-semibold">{name}</h3>

        {/* Price (Hidden on Hover) */}
        <p className="text-sm text-gray-500 transition-all mb-8 duration-500 group-hover:opacity-0">
          ${price}
        </p>

        {/* Add to Cart Button (Appears & Rotates on Hover) */}
        <div className="absolute mb-8 bottom-0 w-full flex justify-center opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <Button className="animate-rotate-once text-[#db915e]">Add To Cart</Button>
        </div>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes rotateOnce {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(10deg); }
            100% { transform: rotate(0deg); }
          }

          .animate-rotate-once {
            animation: rotateOnce 0.5s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default ProductCard;
