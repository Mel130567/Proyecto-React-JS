import Modal from 'react-bootstrap/Modal'
import { useState, useContext, useEffect} from 'react'
import firebase from "firebase";
import {getFirestore} from "../../service/getFirestore";
import { UseCartContext } from '../../Context/CartContext';

const ModalCarrito = () =>{

    const [idOrden, setIdOrden] = useState('')

    const [mensajeId, setMensajeId] = useState(false)

    const [datosForm, setDatosForm] = useState({
        nombre: '',
        tel: '',
        email: ''
    })

    const {cart, totalPrice} = UseCartContext()

    useEffect(
        () => {
            if(idOrden != ''){
                setMensajeId(true)
                console.log("usefefect",idOrden)
            }
        },
        [idOrden]
    )

    const handleChange=(e)=>{
        setDatosForm(
            {
                ...datosForm,
                [e.target.name]: e.target.value
            }
        )
    }

    const generarOrden = async (e) =>{
        e.preventDefault()

        const orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate(new Date())
        orden.buyer = datosForm
        orden.total = totalPrice()
        orden.items = cart.map(cartItem =>{
            const id = cartItem.id;
            const titulo = cartItem.title;
            const precio = cartItem.price

            return {id, titulo, precio}
        })

        const dbQuery = getFirestore()
        await dbQuery.collection('ordenes').add(orden)
        .then(resp => setIdOrden(resp.id))
        .catch(err => console.log('error', err))
        .finally(() => setDatosForm({
            nombre: '',
            tel: '',
            email: ''
        }),)
    
    }

    return(
    <Modal.Dialog>
        <Modal.Header closeButton>
            <Modal.Title>Ingresa tus datos</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <form className="d-flex flex-column bd-highlight mb-3">
                <label>Nombre:</label>
                <input type="text" name='nombre' value={datosForm.nombre} onChange={handleChange}/>
                <label>Email</label>
                <input type="text" name='email' value={datosForm.email} onChange={handleChange}/>
                <label>Telefono</label>
                <input type="text" name='tel' value={datosForm.tel} onChange={handleChange}/>
                <button className="btn btn-outline-info btn-light m-3" onClick={generarOrden}>Enviar</button>
                {mensajeId ? <div><p>¡Felicidades su pedido se ha realizado con exito! Tu numero de compra es : {idOrden}</p></div> : <div>No ha generado un numero de compra</div>}
            </form>
        </Modal.Body>

    </Modal.Dialog>
    )
}

export default ModalCarrito