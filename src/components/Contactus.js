import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Card from 'react-bootstrap/Card';


const Contactus = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, number, message } = data;

    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("number: ", number);
    console.log("Message: ", message);
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center my-3 text-green-900">Contact Us</h1>
        <div className="row my-4">
          <div className="col-md-4 ">
            <Card style={{ width: "20rem" }} className="rounded-5" >
              <Card.Body className="bg-yellow-300 border border-black rounded-5">
                <Card.Title ><h1 className="text-center text-2xl font-serif font-bold text-green-900">Address</h1></Card.Title>
                <Card.Text>
                  <h5 ><span className="font-bold">Farming-store</span>, Near Airport, Hotagi Road ,Solapur, Maharashtra-413224, India. 
                </h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 my-1 ">
          <Card style={{ width: "20rem", height:"10rem"}} className="rounded-5" >
              <Card.Body className="bg-yellow-300 border border-black rounded-5">
                <Card.Title ><h1 className="text-center text-2xl font-serif font-bold text-green-900">Email</h1></Card.Title>
                <Card.Text>
                  <h5 className="font-bold">farmingstore@gmail.com
                </h5>
                <h5 className="font-bold">farmingstore45@gmail.com
                </h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 my-1">
          <Card style={{ width: "20rem", height:"10rem"}} className="rounded-5" >
              <Card.Body className="bg-yellow-300 border border-black rounded-5">
                <Card.Title ><h1 className="text-center text-2xl font-serif font-bold text-green-900">Contact</h1></Card.Title>
                <Card.Text>
                  <h5 className="font-bold text-center">91-9585745698
                </h5>
                <h5 className="font-bold text-center">91-9874561298
                </h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* Form start */}
      <div className="container">
        <div className="row">
          <div className="col-md-7 my-4">
            <div className="row formRow">
              <div className="contactForm">
                <Form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="col-md-12 my-2">
                    <input
                      type="text"
                      name="name"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Please enter your name",
                        },
                        maxLength: {
                          value: 30,
                          message: "Please use 30 characters or less",
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Name"
                    ></input>
                    {errors.name && (
                      <span className="errorMessage text-red-600">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="col-md-12 my-3">
                    <input
                      type="email"
                      name="email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className="form-control formInput"
                      placeholder="Email address"
                    ></input>
                    {errors.email && (
                      <span className="errorMessage text-red-600">
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                  <div className="col-md-12 my-3">
                    <input
                      type="text"
                      name="number"
                      {...register("number", {
                        required: true,
                        pattern:
                          /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])*$/,
                      })}
                      className="form-control formInput"
                      placeholder="Enter the Mobile Number"
                    ></input>
                    {errors.number && (
                      <span className="errorMessage text-red-600">
                        Please enter a valid mobile number
                      </span>
                    )}
                  </div>
                  <div className="col-md-12 my-3">
                    <textarea
                      rows={3}
                      name="message"
                      {...register("message", {
                        required: true,
                      })}
                      className="form-control formInput"
                      placeholder="Message"
                    ></textarea>
                    {errors.message && (
                      <span className="errorMessage text-red-600">
                        Please enter a message
                      </span>
                    )}
                  </div>
                  <div className=" col-md-12 my-3 text-center">
                    <button
                      className="rounded-2 p-2 text-light  font-serif font-extrabold bg-green-900"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="col-md-5 my-5">
            <div className="row">
              <div className="col-md-8  text-yellow-200 bg-green-800">
                <p className="text-center p-1.5 text-4xl font-extrabold">
                  Thank you <br />
                  for <br />
                  the <br /> Contact <br />
                  me!!
                </p>
              </div>
              <div className="col-md-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxJ6djgagJL2Hr7R66AeBWhJtpZp68KH9qeQ&usqp=CAU"
                  alt="contact-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
