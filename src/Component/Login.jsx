import React, { useEffect, useState } from 'react'
import Form from './Form'
import Profutt from './Profutt'

const Login = () => {

   

    const[state,setState] = useState([])
        console.log(state)
        console.log(state)
        const [nombre,setnombre] =useState('')
        const[pass,setpass]= useState('')

        const [cargando,setcargando]= useState(false)

        const[loading,setloading]=useState(true)
        const[de,ree]=useState('')

        const dan = e => {
            setnombre(e.target.value)
        }
        const passe =e =>{
            setpass(e.target.value)
        }
        const hadnlesubmit  = e => {
            e.preventDefault();   
           
setcargando(true)
        setTimeout(() =>{
            logo()
        },10000)
         }

    const logo = () =>{

              
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: nombre,
          password:pass
        })
    };
    fetch('https://reqres.in/api/login', requestOptions)
  
        .then(async response => {
         
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
                console.log(error)
            }
            setloading(false)
            
            setState  (data)
        })
        .catch(error => {
            setState({ errorMessage: error.toString() });
            ree('no encontre productos')
            setcargando(false)
           
        });
          


    }
    return (
        <div>
          

            {loading   ? (
              <div>
               <Form  nombre={nombre} pass={pass} dan={dan}  passe={passe} hadnlesubmit={hadnlesubmit} logo={logo}/>
               {cargando ?

            <h1>cargando</h1>
            :
            <h1>{de}</h1>
            }
                           
              </div>
            
            ) : (
              <Profutt  setloading={setloading}/>
            )}

                
                        </div>
                    
                
  
  )
}

export default Login
