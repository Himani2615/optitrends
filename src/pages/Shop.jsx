import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import {Link} from 'react-router-dom';

export const Shop = () => {
  
      const products = [
    { id: 1, name: 'Classic Black Frame', price: 50, image: 'src/assets/classic.png'},
    { id: 2, name: 'Bold Aviator Style', price: 60, image: 'src/assets/bold.png' },
    { id: 3, name: 'Trendy Tortoise Shell', price: 85, image: 'src/assets/trendy.png' },
    {id:4,name:'Sleek Titanium Frame',price:50,image: 'src/assets/sleek.png'},
    {id:5,name:'Modern Metal Frame',price:80,image: 'src/assets/modern.png'},
    {id:6,name:'Stylish Clear Frame',price:70,image: 'src/assets/stylish.png'},
    {id:7,name:'Retro Round Frame',price:65,image: 'src/assets/retro.png'},
    {id:8,name:'Sophisticated Rimlesss',price:90,image: 'src/assets/rimless.png'},
    {id:9,name:'Retro Round Frame',price:65,image: 'src/assets/retro.png'},
    {id:10,name:'Sleek Titanium Frame',price:50,image: 'src/assets/sleek.png'},
    {id:11,name:'Sophisticated Rimlesss',price:90,image: 'src/assets/rimless.png'},
    {id:12,name:'Modern Metal Frame',price:80,image: 'src/assets/modern.png'},
    {id:13,name:'Sophisticated Rimlesss',price:90,image: 'src/assets/rimless.png'},
    { id: 14, name: 'Trendy Tortoise Shell', price: 85, image: 'src/assets/trendy.png' },
    {id:15,name:'Modern Metal Frame',price:80,image: 'src/assets/modern.png'},
    { id: 16, name: 'Classic Black Frame', price: 50, image: 'src/assets/classic.png'},

    ];

  return (
    <>
    <Navbar/>
    <div className="container pt-5 ">
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center' >
        {products.map((product) => (
          <Link to="/details"><ProductCard key={product.id} product={product} /></Link>
        ))}
      </div>
      </div>
      
      
      <Footer/>



   </>
  )
}

export default Shop