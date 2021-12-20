import { UseCartContext } from "../../Context/CartContext"
import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import ModalCarrito from "../ModalCarrito/ModalCarrito";

const Cart = () =>{
    const [showModal, setShowModal] = useState(false);
    
    const {cart, removeItem, clearCart, itemCounter} = UseCartContext()

    let total = 0;

    return(
        <>
            {cart.length === 0 && 
            <div>
                <h2>¡El carro esta vacio!</h2>
                <br />
                <Link to='/'><button className="btn btn-primary">Ir a comprar</button></Link>
            </div>}

            {cart.length > 0 && 
            <div>
                <div>
                    {cart.map(item => <div key={item.id}>
                                            <div>
                                                <img src={item.pictureUrl} alt="producto" style={{height: "300px"}}/>
                                            </div>
                                            <div>
                                                <h3>{item.title}<button className="btn btn-outline-info btn-light m-3" onClick={() => removeItem(item.id)} title="Borrar producto">X</button></h3>
                                                
                                                <p>Cantidad seleccionada: {item.qnt}</p>
                                                <p>Precio unitario: $ {item.price}</p>
                                            </div>
                                        </div>
                                        )}
                </div>
                {cart.map(item => { total = item.price * item.qnt + total})}
                <div >
                    <h2>Detalle de compra</h2>
                    <div>
                        <p>Total de productos: {itemCounter()}</p>
                        <p>Precio total: $ {total} </p>
                    </div>
                    <div>
                        <button className="btn btn-primary m-3" onClick={() => setShowModal(true)}>Finalizar compra</button>
                        <Link to='/'><button className="btn btn-primary m-3">Seguir comprando</button></Link>
                        <button className="btn btn-primary m-3" onClick={clearCart}>Vaciar el carrito</button>
                    </div>
                </div>
            </div>}
            {showModal ? <ModalCarrito /> : <div></div>}
     </>
    )
}

export default Cart
