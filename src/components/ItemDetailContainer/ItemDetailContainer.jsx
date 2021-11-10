import React, {useState, useEffect} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { productos } from "../../service/productos"
import { Spinner } from "react-bootstrap"

const getItem = new Promise((res,rej) => {
    setTimeout(()=>{
        res(productos)
    }, 2000)
})

const ItemDetailContainer = () =>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getItem
        .then(
            res =>{setProductos(res.filter(prod => prod.id == 1))
            }
        )
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        },[])


    return(
        <>
            {loading ? <Spinner animation="border" className="m-5"/> :
            <div>
                <ItemDetail productos={productos}/>
            </div>
            }
        </>
    )
}

export default ItemDetailContainer