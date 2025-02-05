import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";
import { useCart } from "../CartContent";


export const Checkout1 = () => {
  const { cart,removeFromCart } = useCart(); 
  const subtotal = cart.reduce((acc, product) => acc + product.current_price[0].AUD[0] * product.quantity, 0);


  return (
    <div>
      <Navbar />
      <div className="flex flex-col">
        <Link to="/">
          <p className="ml-8 lg:ml-24 float-left text-[#121A21]">← Shop</p>
        </Link>
        <p className="text-center font-bold text-xl text-[#2C3E50]">Checkout</p>
        <img
          src="/assets/progress1.png"
          className="self-center m-10 mx-auto w-2/3 lg:w-auto"
        />
        <p className="text-center text-lg font-semibold text-[#2C3E50]">
          Review Order
        </p>
      </div>

      {cart.map((product) => (
        <ProductList key={product.id} product={product}/>
      ))}

      <hr className="w-5/6 mx-auto h-5" />
      <p className="text-center mt-10 font-bold text-lg text-[#2C3E50]">
        Cart Summary
      </p>
      <div className=" justify-between mx-auto w-5/6">
        <div className="flex flex-wrap relative mt-10 text-[#2C3E50]">
          <p className=" mt-5">Delivery Fee</p>
          <p className="mt-5 absolute right-0">$29.00</p>
        </div>
        <div className="flex flex-wrap relative mb-10 text-[#2C3E50]">
          <p className=" mt-5">Tax</p>
          <p className="mt-5 absolute right-0 ">$7.00</p>
        </div>
        <hr />
        <div className="flex flex-wrap relative text-[#2C3E50]">
          <p className=" mt-5">Subtotal</p>
          <p className="mt-5 absolute right-0 ">${(subtotal + 29 + 7).toFixed(2)}</p>
        </div>
      </div>
      <Link to="/shipping">
        <div className="w-5/6 mx-auto">
          <button className=" bg-[#2C3E50] rounded text-white h-8 mt-10 w-full text-lg">
            Confirm Order
          </button>
        </div>
      </Link>
      <Footer />
    </div>
  );
};

export default Checkout1;
