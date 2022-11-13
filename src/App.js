import React from 'react';
import './App.css';
import Goods from './components/Goods';

// const iphoneX = {
//   name: 'Iphone X',
//   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   price: '299 $',
//   amount: 2,
// };

// const iphoneXI = {
//   name: 'Iphone XI',
//   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   price: '349 $',
//   amount: 0,
// };

// const iphoneXII = {
//   name: 'Iphone XII',
//   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   price: '599 $',
//   amount: 4,
// };

// ИЛИ

  const Product = function (name, description, price, amount) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.amount = amount;
  };
  
  const iphoneX = new Product('Iphone X', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', '299 $', 5); 
  const iphoneXI = new Product('Iphone XI', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', '349 $', 0); 
  const iphoneXII = new Product('Iphone XII', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', '599 $', 5); 


function App () {
  return (
    <>
      <Goods 
      product= {iphoneX}/>
      <Goods 
      product= {iphoneXI}/>
      <Goods 
      product= {iphoneXII}/>
    </>
    );
  }

export default App;