import React from 'react';
import "https://kit.fontawesome.com/d6f2a9f07b.js";


const Footer = () => {
    return (
        <footer style={styles.footer} className='bg-green-900'>
          <p >Made by Rupali Birajdar</p>
          <p><i class="fa-brands fa-github fa-2xl" style={{color:" #e3ede3"}}>
            </i> &nbsp;&nbsp;
          <i class="fa-brands fa-linkedin fa-2xl" style={{color:" #e3ede3"}}></i>&nbsp;&nbsp;
          <i class="fa-brands fa-twitter fa-2xl" style={{color:" #e3ede3"}}></i>
          
          </p>
          <p className='text-white font-serif font-bold'>©2024 Farming-<span className="text-yellow-500 font-extrabold font-serif">Store</span></p>
        </footer>
      );
    }
    
    const styles = {
      footer: {
       
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
        // position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
      },
}

export default Footer;