import React, { useState } from "react";
import ProductCard from "./ProductCard";
import fData from "../FruitsVegetablesData";
import "./style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from 'react-bootstrap/Button';


const Shop = () => {
 
  const [cval,setItems]=useState(fData);
  // console.log(cval);

  const filterItems=(catItem)=>{
    const updateItems=fData.filter((curItem)=>{
      return curItem.category===catItem
    });
    setItems(updateItems);
  }


  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <h1 className="text-center text-green-900 mt-3 mb-3 fw-bold">Our Products</h1>
      
      <div className="container">
      {/* <Button variant="dark" className="mb-2 me-3" onClick={()=>setItems(fData)}>All</Button>
      <Button variant="dark" className="mb-2 me-3" onClick={()=>filterItems("Fruits")}>Fruits</Button>
      <Button variant="dark" className="mb-2 me-3" onClick={()=>filterItems("Vegetables")}>Vegetables</Button>
      <Button variant="dark" className="mb-2 me-3" onClick={()=>filterItems("Grocery Seeds")}>Grocery Seeds</Button> */}

        <div className="row">
           {
          fData.map((cval, index) => {
            return (
              <ProductCard
                id={cval.id}
                name={cval.name}
                cover={cval.cover}
                rating={cval.rating}
                price={cval.price}
                category={cval.category}
                item={cval}
              />
            );
          })}
          
          
        </div>
      
      </div>
    </>

 
  );
};

export default Shop;
