import React from 'react';
import './Vase.css'
const Vase = ({vase}) => {
    const {name,img,price}=vase
    console.log(vase)
    return (
        <div className='vase-container'>
           <div>
           <img src={img} alt="" />
           </div>
          <div>
          <p>Name:{name}</p>
          <p>price:{price}</p>
          <button>Add To Cart</button>
          </div>
        </div>
    );
};

export default Vase;