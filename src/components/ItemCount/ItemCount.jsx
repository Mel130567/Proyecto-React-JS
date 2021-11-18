import React, {useState} from "react"

const ItemCount = ({stock, initial, func}) => {

    const [count, setCount] = useState(initial)
    
    const sumarProd = () =>{
        if(count < stock){
            setCount(count + 1)
        }else{
            alert(`Superaste el stock disponible. Stock = ${stock}`)
        }
    }

    const restarProd = () =>{
        if(count > initial){
            setCount(count - 1)
        }else{
            alert("Error. No puede agregarse menos de 1 unidad al carrito")

        }
    }

    return (
        <>
            <div>
                <button className="btn btn-info mx-2" onClick={restarProd}>-</button>
                <span>{count}</span>
                <button className="btn btn-info mx-2" onClick={sumarProd}>+</button>
                <button className="btn btn-outline-info btn-light m-3" onClick={func}>
                        Agregar al Carrito
                </button>
            </div>
        </>
        
    )
}

export default ItemCount