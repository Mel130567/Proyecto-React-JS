import React, {useState, useEffect} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { Spinner } from "react-bootstrap"
import {useParams} from 'react-router-dom';
import { getFirestore } from "../../service/getFirestore";


const ItemDetailContainer = () =>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

useEffect(()=>{
    const dbQuery = getFirestore()

    dbQuery.collection('items').doc(id).get()
    .then(res => setProductos({id: res.id, ...res.data()}))    
    .catch(console.log('error'))
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