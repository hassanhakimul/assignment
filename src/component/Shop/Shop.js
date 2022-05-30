import React, { useEffect, useState } from 'react';
import Vase from '../Vase/Vase';
import './Shop.css'
const Shop = () => {
    const [vases,setVases]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setVases(data))
    },[])
    return (
        <div className='shop-container'>
           <div className="vase-container">
        {
            vases.map(vase=><Vase key={vase._id} vase={vase}></Vase>)
        }
           </div>
           <div className="add-container">
               <h2>hello 2</h2>
           </div>
        </div>
    );
};

export default Shop;