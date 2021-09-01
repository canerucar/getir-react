import React from 'react'
import { useState, useEffect } from 'react';
import categoryData from 'api/categories.json';
import Category from './ui/Category';
import Title from './ui/Title';

function Categories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData);
  }, [])

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <Title>Kategoriler</Title>
        <div className="grid grid-cols-10">
          {!categories.length && 'Yükleniyor...'}
          {categories &&
            categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Categories
