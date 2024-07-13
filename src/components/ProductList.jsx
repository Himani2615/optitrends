import React,{useState} from "react";
import CounterForm from "./CounterForm";
import { useCart } from "../CartContent";

export const ProductList = ({ product }) => {

  const { updateCart,removeFromCart } = useCart();
  const imageUrl =  `https://api.timbu.cloud/images/${product?.photos[0]?.url}`;
  const price = product.current_price[0].AUD[0];
  const [count, setCount] = useState(product.quantity || 1);

    const increment = () => {
    if (count < 10) {
      const newCount = count + 1;
      setCount(newCount);
      updateCart(product.id, newCount);
    }
  };

  const decrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      updateCart(product.id, newCount);
    }
  };

  


  return (
    <div>
      <div className="flex mt-16 px-1 ml-2 lg:ml-0">
        <div className="flex flex-col lg:ml-40 lg:w-auto">
          <img src={imageUrl} className=" mx-auto lg:mt-0  " />
          
            <button onClick={() => removeFromCart(product.id)} className="btn border-2 border-[#2C3E50] text-[#2C3E50] w-full lg:w-56 rounded p-1 lg:p-3">
              Remove Item
            </button>
          
        </div>
        <div className="flex flex-wrap ">
        <div className="flex flex-col text-md w-full lg:w-auto lg:ml-56 ml-5 md:ml-28">
          <p className="sm:block hidden text-[#121A21]">
            Brand: Elegant | Similar product from Elegant
          </p>
          <h1 className="text-md lg:text-lg font-semibold mt-1 text-[#121A21]">{product.name}</h1>
          <div className="flex flex-wrap">
            <p className="lg:mt-10 lg:mb-4 mb-1 mt-3 text-sm">Size</p>
            <p className="lg:ml-20 lg:mt-10 mt-3 lg:mb-1 mb-0.5 ml-2 text-sm">
              Color
            </p>
          </div>
          <div className="flex flex-wrap lg:w-auto">
            <p className="text-sm">28mm</p>
            <div className="w-6 h-6 bg-black rounded-full  mb-2 lg:ml-16 ml-1"></div>
          </div>
        </div>
        <div className="flex flex-col font-bold text-xl items-center md:w-auto lg:ml-56 ml-16 md:ml-24">
          <p className="ml-5 md:ml-0">${(price * count).toFixed(2)}</p>

          <CounterForm count={count} increment={increment} decrement={decrement}/>
        </div>
        </div>
      </div>

      <div className="my-10" />
    </div>
  );
};

export default ProductList;