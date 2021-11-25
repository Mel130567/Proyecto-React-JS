import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import {UseCartContext, CartContext} from "../../Context/CartContext";
import {Link} from 'react-router-dom';

const ItemDetail = ({productos}) =>{

    const[addToCart, setAddToCart] = useState(false)
    
    const {cart, addItem} = UseCartContext()

    const onAdd = (count) => {
        setAddToCart(true)
        addItem({...productos[0], qnt: count })                
    }
    console.log("Cart", cart);
    return(
        <>
            <div className="card" style={{width: "18rem"}} key={productos[0].id}>
                <img src={productos[0].pictureUrl} className="card-img-top" alt="..."></img>
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
                    <h5 className="card-title">{productos[0].tittle}</h5>
                    <p className="card-text">{productos[0].description}</p>
                    <p className="card-text">{productos[0].price}</p>
                    <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                </div>
                }
            </div>
        </>
    )
}

export default ItemDetail