import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom';
import './style.css';
import { useCart } from "react-use-cart";
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Badge from 'react-bootstrap/Badge';


const ProductCard = (props) => {
  const {addItem}=useCart();

  function addprod()
  {
    toast.success('🦄 Product is added to cart.' ,{
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Zoom,
     
      });
  }
  return (
    <>
    
 
  <div className="col-md-4 my-1 text-center">
  <Card className="product-Card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.cover}/>
        <Card.Body>
          <Card.Title><h2 className=" font-serif font-extrabold">{props.name}</h2></Card.Title>
          <Card.Text>
            <h3>{props.price}₹</h3>
            <h4>Rating :{props.rating}</h4>
            <h5 className="text-gray-500">Category : <Badge bg="secondary">{props.category}</Badge></h5>
          </Card.Text>
          <NavLink to={`/productinfo/${props.id}`}>
          <Button variant="dark" className="rounded-4 text-light me-2 font-serif font-extrabold">Know More</Button>
          </NavLink>
          <Button variant="success" onClick={()=>addItem(props.item,addprod())
        } 
           className="rounded-4 text-light me-2 font-serif font-extrabold" >Add To Cart</Button>
        </Card.Body>
      </Card>

      </div>

    </>
  );
};

export default ProductCard;
