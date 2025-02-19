import Button from "../Button/Button";

const ProductCard = () => {
  return (
    <div className="relative w-72 p-4 bg-white shadow-lg rounded-xl overflow-hidden border border-transparent transition-all ">
      {/* Animated Dashed Border */}
      <div className="absolute inset-0 rounded-xl border-2  border-gray-400 opacity-50 "></div>

      {/* Product Image */}
      <img
        src="/your-image-path.png"
        alt="Premium Bed Wooden"
        className="w-full h-48 object-contain"
      />

      {/* Product Info */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">BEDS</p>
        <h3 className="text-lg font-semibold">Premium Bed Wooden</h3>
        <Button>
            Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
