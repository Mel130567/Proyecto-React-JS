import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import {UseCartContext, CartContext} from "../../Context/CartContext";
import {Link} from 'react-router-dom';

const ItemDetail = ({productos}) =>{
    console.log(productos);

    const[addToCart, setAddToCart] = useState(false)
    
    const {cart, addItem} = UseCartContext()

    const onAdd = (count) => {
        setAddToCart(true)
        addItem({...productos, qnt: count })                
    }

    return(
        <>
            <div className="card" style={{width: "18rem"}} key={productos.id}>
                <img src={productos.pictureUrl} className="card-img-top" alt="producto de mascota"></img>
                {addToCart ? 
                <div className="card-body">
                    <Link to="/" >
                    <button className="btn btn-primary">Seguir comprando</button>
                    </Link>
                    <Link to = {"/cart"}>
                        <button className="btn btn-primary m-2">
                            Finalizar Compra
                        </button>
                    </Link>
                </div> :
                <div className="card-body">
                    <h5 className="card-title">{productos.tittle}</h5>
                    <p className="card-text">{productos.description}</p>
                    <p className="card-text">{productos.price}</p>
                    <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                </div>
                }
            </div>
        </>
    )
}

export default ItemDetail