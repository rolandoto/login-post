import React from 'react'

const Form = ({nombre,pass,dan,passe,hadnlesubmit,logo}) => {
    return (
        <div>
             <form onSubmit={hadnlesubmit}>
                <input type="nombre" onChange={dan} value={nombre}  placeholder="ingresar nombre"/>
                <input type="nombre" onChange={passe} value={pass}  placeholder="ingresar passsword"/>
                <button onClick={logo}>login</button>
            </form>
        </div>
    )
}

export default Form
