import Modal from 'react-bootstrap/Modal'
import { useState, useContext} from 'react'
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

    const handleChange=(e)=>{
        setDatosForm(
            {
                ...datosForm,
                [e.target.name]: e.target.value
            }
        )
    }

    const generarOrden = (e) =>{

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
        dbQuery.collection('ordenes').add(orden)
        .then(resp => setIdOrden(console.log(resp.id)))
        .catch(err => console.log('error', err))
        .finally(() => setDatosForm({
            nombre: '',
            tel: '',
            email: ''
        }))
        
        {console.log(orden, 'la orden')}
    
    }

    return(
    <Modal.Dialog>
        <Modal.Header closeButton>
            <Modal.Title>Ingresa tus datos</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <form onSubmit={generarOrden} >
                <label>Nombre:</label>
                <input type="text" name='nombre' value={datosForm.nombre} onChange={handleChange}/>
                <label>Email</label>
                <input type="text" name='email' value={datosForm.email} onChange={handleChange}/>
                <label>Telefono</label>
                <input type="text" name='tel' value={datosForm.tel} onChange={handleChange}/>
                <button onClick={() => setMensajeId(true)}>Enviar</button>
                {mensajeId ? <div><p>Tu numero de compra es : {idOrden}</p></div> : <div></div>}
            </form>
        </Modal.Body>

        <Modal.Footer>
            <button variant="primary">Cerrar</button>
        </Modal.Footer>
    </Modal.Dialog>
    )
}

export default ModalCarrito