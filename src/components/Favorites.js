import React from 'react'
import {useState, useEffect} from 'react';
import Title from './ui/Title';
import Products from 'api/products.json';
import ProductItem from './ui/ProductItem';

function Favorites() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, [])

  return (
    <div>
      <Title>Favoriler</Title>
      <div className="grid grid-cols-8 gap-1 bg-white rounded-lg overflow-hidden">
        {products.length && products.map((product, index) => <ProductItem key={index} product={product} />)}
      </div>
    </div>
  )
}

export default Favorites
