import React, { useState } from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar'; 
import { Link ,NavLink} from 'react-router-dom'
import "https://kit.fontawesome.com/d6f2a9f07b.js";
import "./style.css";
 

const MyNavbar = () => {
  const[menuOpen,SetMenuopen]=useState(false)
  return (
    // <>
    //   <Navbar expand="lg" className="bg-green-900 sticky-top">
    //   <Container>
    //     <Navbar.Brand href="#home" className="text-white font-serif font-bold text-9xl">Farming-<span className="text-yellow-500 font-extrabold font-serif">Store</span></Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="m-auto ">
    //         <NavLink className="nav-link text-light" to="/Home" >Home</NavLink>
    //         <NavLink className="nav-link text-light" to="/shop" >Shop</NavLink>
    //         <NavLink className="nav-link text-light" to="/about" >About Us</NavLink>
    //         <NavLink className="nav-link text-light" to="/contact" >Contact Us</NavLink>
         
    //         {/* <Nav.Link href="/cart">Cart</Nav.Link> */}
    //       </Nav>
    //       <NavLink className={'nav-link'} to={'cart'}><i className="fa-solid fa-cart-shopping fa-xl text-yellow-500"></i></NavLink>&nbsp;&nbsp;
    //       <NavLink className={'nav-link'} to={'login'}><i className="fa-solid fa-user fa-xl text-yellow-500"></i></NavLink>

    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    // </>
    <>
    <nav>
      <Link to="/" className='webname text-white font-serif font-bold '>Farming-<span className="text-yellow-500 font-extrabold font-serif">Store</span></Link>
      <div className='menu' onClick={()=>{
        SetMenuopen(!menuOpen)
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen?"open":""}>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
        <NavLink to="/shop">SHOP</NavLink>
        </li>
        <li>
        <NavLink to="/about">ABOUT US</NavLink>
        </li>
       
        <li>
        <NavLink to="/contact">CONTACT US</NavLink>
        </li>
        <li>
        <NavLink  to="/cart" ><i className="fa-solid fa-cart-shopping fa-xl text-yellow-500"></i></NavLink>&nbsp;&nbsp;
        </li>
        <li>
        <NavLink  to="/login" ><i className="fa-solid fa-user fa-xl text-yellow-500"></i></NavLink>
        </li>
        
      </ul>
    </nav>
    </>
  )
}

export default MyNavbar;