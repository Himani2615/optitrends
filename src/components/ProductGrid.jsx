import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductsGrid = () => {
  const [products,setProducts] = useState([]);


  useEffect(() => {
    fetch(`api/products?organization_id=${import.meta.env.VITE_ORGANIZATION_ID}&Appid=${import.meta.env.VITE_APPID}&Apikey=${import.meta.env.VITE_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data.items);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center mx-auto">
      {products.map(product => (
        
          <ProductCard product={product} />
        
      ))}
    </div>
  );
};

export default ProductsGrid;
