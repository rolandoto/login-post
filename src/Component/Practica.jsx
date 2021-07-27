import React, { useEffect, useState } from 'react'
import Product from './Product'

const Practica = () => {


    const [count,setcount] = useState("naruto")
    
    const hansumar = (e) => {
        setcount(e.target.value)
    }
   
    const  hande = e => {
        e.preventDefault();
       
        
    } 

    console.log(count)

    
    

    return (
        <div>
            <h1>bienvenido</h1>
          
            <form onSubmit={hande}>
            <input type="text" value={count}  onChange={hansumar}   />ingrenumero
            </form>
       
           
            <h4>{count}</h4>
       
            <Product  count={count}/>
           
        </div>
    )
}

export default Practica
