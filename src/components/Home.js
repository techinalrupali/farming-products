import React from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";

import "./style.css";

const Home = () => {
  return (
    <>
      {/* Home page start */}
      <div className="main">
        <div className="secmain">
          <h1 className="text-2xl text-green-600  font-extrabold z-auto font-serif">
            Welcome To
          </h1>
          <h1 className="text-4xl text-yellow-500  font-extrabold z-auto font-serif">
            Farming Store
          </h1>
          <p className="z-auto text-center p-1.5 text-xl text-yellow-200">
            Adding green to your life.
            <br />
            Bringing growth to agriculture.
          </p>
          <NavLink to={"/about"}>
            <button className="border-4 border-black rounded-5 p-2 text-base font-bold text-black bg-yellow-500 z-auto hover:bg-yellow-800 ">
              Know More
            </button>
          </NavLink>
        </div>
      </div>
      {/* Home page end */}

      {/* Categories section sart */}
      <div className="container">
        <h1 className="text-center my-3 text-green-900">Categories</h1>
        <div className="row my-3">
          <div className="col-md-4 my-2">
            <Card className="product-Card border border-black" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefhw0LwMgaEPs4HjtcRTzFkvUHgLHG0TgkA&usqp=CAU"
              />
              <Card.Body>
              <Card.Title className="text-center">
                <NavLink to={'/fruit'}>
                  <button className="border-3 border-black rounded-4 p-1 text-base font-bold text-white bg-green-900 hover:bg-yellow-600 ">
                    Fruits
                  </button>
                </NavLink>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 my-2">
            <Card className="product-Card border border-black" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://assets-global.website-files.com/5d2fb52b76aabef62647ed9a/6195c8e178a99295d45307cb_allgreen1000-550.jpg"
              />
              <Card.Body>
                <Card.Title className="text-center">
                <NavLink to={'/vegetable'}>
                  <button className="border-3 border-black rounded-4 p-1 text-base font-bold text-white bg-green-900 hover:bg-yellow-600 ">
                    Vegetables
                  </button>
                </NavLink>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 my-2">
            <Card className="product-Card border border-black" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHzPVBk4ORcl9fP6snj5gJ25WQRl1uOEIUw&usqp=CAU"
              />
              <Card.Body>
                <Card.Title className="text-center">
                <NavLink to={"/seeds"}>
                  <button className="border-3 border-black rounded-4 p-1 text-base font-bold  text-white bg-green-900 hover:bg-yellow-600 ">
                  Grocery Seeds
                  </button>
                </NavLink>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* Categories section end */}


    {/* Services start */}
       <div className="container">
       <h1 className="text-center my-3 text-green-900">Services</h1>
           <div className="row">
             <div className="col-md-4 my-3">
             <Card style={{ width: "20rem" }} className="ser-img border border-black">
             <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLX0Hk0hFFU2Vpgy-kxeUybJr6yCgJU4eC7w&usqp=CAU" />
              <Card.Body>
                <Card.Text>
                  <h1 className="text-center text-2xl font-serif font-bold" > 50% Discount 
                </h1>
                </Card.Text>
              </Card.Body>
            </Card>
             </div>
             <div className="col-md-4 my-3">
             <Card style={{ width: "20rem" }} className="ser-img border border-black">
             <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqdRTedcQG1LclDGjTPs8LVDARHovtTw-rUg&usqp=CAU" />
              <Card.Body>
                <Card.Text>
                  <h1 className="text-center text-2xl font-serif font-bold" > Free Delivery
                </h1>
                </Card.Text>
              </Card.Body>
            </Card>
                
             </div>
             <div className="col-md-4 my-3">
             <Card style={{ width: "20rem" }} className="ser-img border border-black">
             <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTev-3GpV2L3oAR4tveuKRShXlM_FolwDuhxg&usqp=CAU" />
              <Card.Body>
                <Card.Text>
                  <h1 className="text-center text-2xl font-serif font-bold" > Cash on Delivery
                </h1>
                </Card.Text>
              </Card.Body>
            </Card>
                
             </div>
           </div>
       </div>
    {/* Services end */}
    </>
  );
};

export default Home;
