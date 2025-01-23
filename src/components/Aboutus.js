import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Aboutus = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center my-3 text-green-900">About Us</h1>
        <div className="row">
          <div className="col-md-5">
            <img
              src="https://i.pinimg.com/564x/8a/80/4e/8a804e52c5957c2f956c22065cf4da7c.jpg"
              alt="fruits-vegetables-products"
            />
          </div>
          <div className="col-md-7 my-2">
            <p className="text-center p-1.5 text-xl text-yellow-200 bg-green-800">
              This web app is build for farmers to provide them a platform to
              connect with their customers directly and get the best value of
              their products.
              <br />
              <br />
              This platform wants to connect farms who wants to sold their
              products in bulk and the big companies or organizations which want
              to buy the farm products in bulk.
              <br />
              <br />
              our team wishes this platform fullfill its user's above mentioned
              needs and add value in their bussiness, Best of Luck.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="text-center my-3 text-green-900">Farming</h2>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 h-min"
              src="https://i.pinimg.com/564x/b3/d1/9c/b3d19cd81c335e8356c82c27cc20ad8c.jpg"
              alt=""
            />
            <Carousel.Caption>
              <h1 className="font-serif font-extrabold text-white">
                Fruits Farming
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-min"
              src="https://i.pinimg.com/564x/a1/c1/33/a1c133477808d4dd4ecf880e914835b5.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1 className="font-serif font-extrabold text-white">
                Vegetables Farming
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-min"
              src="https://i.pinimg.com/736x/05/30/2d/05302d40ea1ea3793ebf13c6bf49fdad.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1 className="font-serif font-extrabold text-white">
                Seeds Farming
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="container">
      <h2 className="text-center my-3 text-green-900">Farmer, How to Farming </h2>
        <div className="row">
          <div className="col-md-4 my-3">
            <iframe
              width="350"
              height="250"
              src="https://www.youtube.com/embed/syDRoJ1PdYI?si=YrcTdWsokrwvG49L"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; 
                  autoplay; 
                  clipboard-write; 
                  encrypted-media; 
                  gyroscope; 
                  picture-in-picture; 
                  web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-md-4 my-3">
          <iframe
              width="350"
              height="250"
              src="https://www.youtube.com/embed/GdNhpb2FKVI?si=EzIRPP8po7FaAXSV"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; 
                  autoplay; 
                  clipboard-write; 
                  encrypted-media; 
                  gyroscope; 
                  picture-in-picture; 
                  web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-md-4 my-3">
          <iframe
              width="350"
              height="250"
              src="https://www.youtube.com/embed/Gn1Dq4MB7S4?si=YoT6OqFTa-SNWlym"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; 
                  autoplay; 
                  clipboard-write; 
                  encrypted-media; 
                  gyroscope; 
                  picture-in-picture; 
                  web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
