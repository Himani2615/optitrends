import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContent";

export const ProductCard = ({ product }) => {

  const { addToCart,removeFromCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsInCart(true);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    setIsInCart(false);
  };

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const imageUrl =  `https://api.timbu.cloud/images/${product?.photos[0]?.url}`;
  const price = product.current_price[0].AUD[0];


  return (
    <div>
      <div className="group relative border rounded-lg mt-10 overflow-hidden lg:p-10 h-96 md:p-10 p-1">
        <div className="lg:group-hover:translate-y-[-50px] transition-transform duration-300">
          <Link to={`/${product.id}`} key={product.id}>
          <img
            src={imageUrl}
            alt={product.name}
            className="h-auto rounded-md object-center mt-5  mx-auto"
          /></Link>
          <img
              src="/assets/fav.png"
              className={`opacity-100 lg:opacity-0 lg:group-hover:opacity-100 float-right cursor-pointer ${
                isFavorite ? "bg-red-500" : "bg-white"
              }`}
              onClick={handleFavoriteToggle}
            />
          <h2 className="text-center lg:mt-10 mt-3">{product.name}</h2>
          <p className="text-lg font-semibold text-center mt-5 lg:mt-10">
            ${price}
          </p>
          
        </div>
        
        {isInCart ? (
          <button
            onClick={handleRemoveFromCart}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 text-[#2C3E50] px-2 lg:px-4 py-2 rounded opacity-100 lg:opacity-0 lg:group-hover:opacity-100 bg-white w-4/5 mx-auto md:w-auto mt-0 border-[#2C3E50] border-2"
          >
            Remove Item
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 text-white px-2 lg:px-4 py-2 rounded opacity-100 lg:opacity-0 lg:group-hover:opacity-100 bg-[#2C3E50] w-4/5 mx-auto md:w-auto mt-0"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
