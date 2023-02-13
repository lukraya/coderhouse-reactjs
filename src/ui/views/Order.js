import React from 'react'
/* import '../styles.css' */

const Order = ({ordenId}) => {

    return (
        <div className="orden">
            {ordenId !== 'error' ?
                <>
                    <p>Orden de compra número: {ordenId}</p>                    
                    <p>Gracias por su compra!</p>
                </>
                : <p>¡Error: no se pudo generar su orden!</p>
            }
        </div>
    )
}

export default Order