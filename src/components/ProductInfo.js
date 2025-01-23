import React from 'react';
import fData from '../FruitsVegetablesData';
import { useParams } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';



const ProductInfo = () => { 
    const {id}= useParams();
    console.log(id)

  return (
    <>      
     <h1 className="text-center my-3 text-green-900">Product Infomation</h1>
        
       <div className='container'>
       {
            fData.map((cval)=>{
                if(id==cval.id){
                  
                    return(
                        <>
                            <div className="container">
                                  <div className="row">
                                       <div className="col-md-5 my-2">
                                            <img src={cval.cover} height={'500'} width={'400'} alt='product-img '/>
                                       </div>
                                       <div className="col-md-7 my-2">
                                        <h1 className="text-red-600 font-serif font-extrabold">Name : {cval.name}</h1>
                                        <h3>Price : {cval.price}</h3>
                                        <h4>Rating : {cval.rating}</h4><br/>
                                        <h6>{cval.description}</h6>
                                        <h5 className="text-gray-500">Category :<Badge bg="secondary"> {cval.category}</Badge></h5>
                                        <button className="btn btn-success rounded-4 my-3 font-serif font-extrabold" >Add To Cart</button>


 
                                       </div>
                                  </div>
                            </div>

                        </>
                    );
                }

                

            })
         }
       </div>

      

   
    </>
  )
}

export default ProductInfo;