// pages/index.js
import React from 'react';
import Cart from '../components/Cart';
import ProductList from '../components/productList';
import useStore from '../lib/store';
import {useState} from "react"

const products = [
  { id: 1, name: 'Python Word Guessing Game', price: 15, description: 'A fun game where the user has to guess a random word chosen by the computer. The game is written in Python and uses a list of words to choose from.' },
  { id: 2, name: 'Python Data Structures Guide', price: 25, description: 'A comprehensive guide to common data structures in Python, including dictionaries, tuples, and arrays. The guide covers how to create, modify, and manipulate these data structures.' },
  { id: 3, name: 'NumPy Cheat Sheet', price: 10, description: 'A quick reference guide for NumPy beginners looking to get started with data analysis. The cheat sheet covers topics such as adding/removing elements, resizing arrays, and combining arrays.' },
  { id: 4, name: 'Python for Data Analysis Book', price: 30, description: 'A book that covers the basics of NumPy arrays and vectorized computation in Python. The book also covers common array algorithms like sorting, unique, and set operations.' },
  { id: 5, name: 'Python List Uniqueness Function', price: 5, description: 'A Python function that takes a list of lists and returns a new list with only the unique elements. The function uses a list comprehension to concatenate each element of the list into a single string.' },
  { id: 6, name: 'Apple MacBook Pro', price: 1500, description: 'A high-end laptop from Apple with a 13-inch Retina display, 8GB of RAM, and a 512GB SSD. The laptop is powered by an Intel Core i5 processor and comes with macOS pre-installed.' },
  { id: 7, name: 'Samsung Galaxy S21', price: 800, description: 'A flagship smartphone from Samsung with a 6.2-inch AMOLED display, 8GB of RAM, and 128GB of storage. The phone is powered by a Snapdragon 888 processor and runs on Android 11.' },
  { id: 8, name: 'Sony WH-1000XM4 Headphones', price: 350, description: 'A pair of wireless noise-cancelling headphones from Sony with up to 30 hours of battery life. The headphones feature touch controls, voice assistant support, and support for high-resolution audio.' },
  { id: 9, name: 'Logitech MX Master 3 Mouse', price: 100, description: 'A high-end wireless mouse from Logitech with a 4000 DPI sensor and support for up to three devices. The mouse features customizable buttons and a rechargeable battery that lasts up to 70 days.' },
  { id: 10, name: 'Dell XPS 13 Laptop', price: 1200, description: 'A high-end laptop from Dell with a 13.4-inch display, 16GB of RAM, and a 512GB SSD. The laptop is powered by an 11th Gen Intel Core i7 processor and comes with Windows 10 pre-installed.' },
  { id: 11, name: 'Samsung 49-Inch Ultrawide Monitor', price: 1000, description: 'A large ultrawide monitor from Samsung with a 49-inch curved display and a resolution of 5120x1440. The monitor features a 120Hz refresh rate and supports HDR content.' },
  { id: 12, name: 'Raspberry Pi 4', price: 50, description: 'A small single-board computer from Raspberry Pi with a quad-core ARM Cortex-A72 CPU and up to 8GB of RAM. The computer is ideal for DIY projects and can run a variety of operating systems, including Linux and Windows 10.' }
]





const IndexPage = () => {

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setDisplayProduct(filtered);
  };

  function SortByPrice(){
    const sortedByPrice = products.slice().sort((a, b) => a.price - b.price);
  setDisplayProduct(sortedByPrice)
  }
  
  const sortByOrder = () => {
    const sorted = products.slice().sort((a, b) => a.id - b.id);
    setDisplayProduct(sorted);
    
  };

  const [displayProduct, setDisplayProduct]= useState(products)
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = useStore((state) => state.addToCart);

  return (
    <div className="container">
      <h1>Next.js Shopping Cart</h1>
      <div className="row d-flex">
      <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search products..." />
        <button onClick={SortByPrice}>Sort by price</button>
        <button onClick={sortByOrder}>Sort by order</button>
      <ProductList products={displayProduct} addToCart={addToCart} />
      </div>
     
      <Cart />
    </div>
  );
};

export default IndexPage;