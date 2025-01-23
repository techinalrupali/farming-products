import React from "react";
import { useCart } from "react-use-cart";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "https://kit.fontawesome.com/d6f2a9f07b.js";


const Cart = () => {
  const {updateItemQuantity,removeItem,items, totalItems, totalUniqueItems, cartTotal } = useCart();
    // console.log(items);
  //payment info
 return (
    // <div>Cart</div>
    <>
    {/* my-3 text-green-900 */}
      <div className="container justify-center items-center me-5 my-4">
        
      <Card className="border-2 border-black" >
        <div className="bg-green-300 border-b-2 border-green-600">
      <Card.Header > <h3 className="text-center my-3 text-green-900">Cart</h3></Card.Header>
      </div>
      <Card.Body>
        <Card.Text>
        <table className="table table-stripe hover">
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
            
          </tr>
            {
             items.map((cval)=>{
              return(
                <tr>
                  <td>{cval.id}</td>
                  <td><img src={cval.cover} height={'100'} width={'100'} alt="product-img"/></td>
                  <td>{cval.name}</td>
                   <td>{cval.price} ₹</td>
                   <td><button className="ms-2 text-success text-2xl" onClick={()=>updateItemQuantity(cval.id,cval.quantity + 1)}>+</button>
                   <span className="text-center font-bold">{cval.quantity}</span>
                   <button className="text-warning text-2xl ms-2" onClick={()=>updateItemQuantity(cval.id,cval.quantity -1 )}>-</button></td>
                   <td><button className="ms-2" onClick={()=>removeItem(cval.id)}><i className="fa-solid fa-trash fa-xl" style={{color:"red"}}></i></button></td>
                </tr>
              );

             })
          }
         
       </table>
       
        </Card.Text>
        
      </Card.Body>
      <div className="border-t-2 border-green-600">
      <Card.Footer ><h3 className="text-end">Total = <span className="text-danger font-extrabold">Rs. {cartTotal}</span></h3></Card.Footer>
      </div>
    </Card>
  <div className="text-center my-3">
  <Button variant="success" >Checkout</Button>
  </div>
      </div>
    </>
  );
};

export default Cart;
