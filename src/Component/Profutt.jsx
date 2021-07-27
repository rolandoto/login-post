import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const Profutt = ({setloading}) => {

    const [state,setstate] = useState([])
    console.log(state)
    const api = 'https://reqres.in/api/users?page=1'

    

    useEffect(() =>{
        fetch(api)
        .then(response => response.json())
        .then(Data =>   setstate(Data.data))
    },[])


    const back = () => {
        setloading(true)
    }
    return (
        <div>
            <Link to='/' href="">
               <button onClick={back}>cerrar seccion</button>
            </Link>

<h1>
                {state.map((re)=>(
                    <img src={re.avatar} alt=""/>
                 
                ))}
           </h1>


        </div>
            

            

           
           
        
    )
}

export default Profutt
