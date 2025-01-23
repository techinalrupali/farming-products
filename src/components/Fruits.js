import React from 'react';
import fruitData from '../fruitData';
import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Fruits = () => {
  return (
    <>
      <div className="container ">
      <h1 className="text-center my-3 text-green-900">Fruits</h1>
        
        <div className="row">
          {fruitData.map((val, i) => {
            return (
              <div className="col-md-4 my-3 ">
                <Card className="product-Card " style={{ width: "18rem" }} >
                  <Card.Img variant="top" height={300} src={val.cover}/>
                  <Card.Body>
                    <Card.Title><h2 className='text-center font-serif font-extrabold'>{val.name}</h2></Card.Title>
                    <Card.Text className='text-center'>
                        <h4>{val.price}</h4>
                    Rating: {val.rating}
                    </Card.Text>
                   <p className='text-center'>
                   <NavLink to={`/productinfo/${val.id}`}>
                      <Button variant="dark" className="rounded-4 text-light me-2 font-serif font-extrabold">Know More</Button>
                    </NavLink>
                   </p>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Fruits;