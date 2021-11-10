import React, {useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList"
import { productos } from "../../service/productos"
import { Spinner } from "react-bootstrap"


const verProductos = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(productos)
    }, 2000)
})

const ItemListContainer = ({greetings}) => {

const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)

useEffect(()=>{
    verProductos
    .then(
        res =>{
            setProductos(res)
        }
    )
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
    },[])
    
    return (
        <>
        { loading ? <Spinner animation="border" className="m-5"/> :
            <div className="itemListContainer d-flex justify-content-center flex-wrap">
                <p>{greetings}</p>
                <ItemList productos={productos}/>
            </div>
        }
        </>
        
    )
}


export default ItemListContainer