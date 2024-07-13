import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ProductsGrid from "../components/ProductGrid";
import { useCart } from "../CartContent";

export const ProductDetails = () => {

  const {addToCart,removeFromCart} =useCart();

  const [product, setProduct] = useState(null);
  const {product_id} = useParams();
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsInCart(true);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    setIsInCart(false);
  };


  useEffect(() => {
         fetch(`https://timbu-get-single-product.reavdev.workers.dev/${product_id}?organization_id=${import.meta.env.VITE_ORGANIZATION_ID}&Appid=${import.meta.env.VITE_APPID}&Apikey=${import.meta.env.VITE_API_KEY}`)
        .then(response => response.json())
      .then(data => setProduct(data));
  }, [product_id]);

  if (!product) {
    return <div>Loading..</div>;
  }

  
 
 return (
    <div>
      <Navbar />

      <Link to="/">
            <p className="mb-20 md:pl-20 lg:pl-56 mt-3">←Back to Shop</p>
          </Link>

      <div className="flex flex-wrap items-center justify-evenly">
          
      <img src={`api/images/${product.photos[0].url}`}  className=" md:w-56 lg:w-96 "/>
       
        <div className="flex flex-col  text-[#121A21]">
          <p>Brand:Elegant | Similar Product from Elegant</p>
          <h1 className="text-xl font-semibold">{product.name}</h1>
          <p className="mt-5 mb-2">
            Description: Experience ultimate comfort and durability
            <br /> with the {product.name}, known for its lightweight
            <br /> construction and premium feel.
          </p>
          <hr />

          <label htmlFor="frame" className="mt-5">
            Lens Width and Frame Size
          </label>
          <select
            id="frame"
            className="bg-white border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-[#2C3E50] focus:border-[#2C3E50] block lg:w-full p-2.5 lg:h-14 w-5/6"
          >
            <option selected>Select Frame Size</option>
            <option>28 mm</option>
            <option>30 mm</option>
            <option>32 mm</option>
          </select>

          <p className="my-5">Choose Color</p>
          <div className="grid grid-cols-4 gap-0.5">
            <button className="w-10 h-10 bg-black rounded-full focus:opacity-30 "></button>
            <button className="w-10 h-10 bg-gray-600 rounded-full focus:opacity-30"></button>
            <button className="w-10 h-10 bg-red-600 rounded-full focus:opacity-30"></button>
            <button className="w-10 h-10 bg-purple-600 rounded-full focus:opacity-30"></button>
          </div>
          <p className="text-xl font-bold mt-10">$60.00</p>
          
            
            {isInCart ? (
          <button
            onClick={handleRemoveFromCart}
            className="btn mt-10 border-2 border-[#2C3E50] text-[#2C3E50] rounded lg:w-56 h-10 w-80 "
          >
            Remove Item
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="btn mt-10 border-2 border-[#2C3E50] text-white bg-[#2C3E50] rounded lg:w-56 h-10 w-80"
          >
            Add to Cart
          </button>
        )}
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-lg font-bold ml-10 text-[#2C3E50]">Recommended</h1>
      </div>

      <div className="container pt-10 ">
        <ProductsGrid/>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
