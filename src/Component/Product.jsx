import React, { useEffect, useState } from 'react'

const Product = ({count}) => {
    const api = `https://api.giphy.com/v1/gifs/search?q=${count}&limite=10&api_key=Bl5n93o1TXOey7JMQbDqAUkbx2RYXyNQ`


    const [nombre,setnombre] = useState([])
    useEffect(() =>{
        fetch(api)
        .then(Response => Response.json())
        .then(data => setnombre(data.data))
    },[])
    return (
        <div>
             {nombre.map((image ) => (
             
             <img key={image.id} src={image.images.downsized_medium.url} alt=""/>
           ))}
        
        </div>
    )
}

export default Product
