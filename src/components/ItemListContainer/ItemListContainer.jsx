import React, {useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList"

import { Spinner } from "react-bootstrap"
import {useParams} from 'react-router-dom';
import { getFirestore } from "../../service/getFirestore";


const ItemListContainer = () => {

const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)

const {categoryId} = useParams()

useEffect(()=>{

    const dbQuery = getFirestore()

    if(categoryId === undefined){
        dbQuery.collection('items').get()
        .then(res => setProductos(res.docs.map( prod => ({ id: prod.id, ...prod.data()}))))
        .catch(err => console.log('error', err))
        .finally(() => setLoading(false))
    } else{
        dbQuery.collection('items').where('category', '==', parseInt(categoryId)).get()
        .then(res => setProductos(res.docs.map( prod => ({ id: prod.id, ...prod.data()}))))
        .catch(err => console.log('error', err))
        .finally(() => setLoading(false))
    }
    },[categoryId])
    
    return (
        <>
        { loading ? <Spinner animation="border" className="m-5"/> :
            <div className="itemListContainer d-flex justify-content-center flex-wrap">
                <ItemList productos={productos}/>
            </div>
        }
        </>
        
    )
}


export default ItemListContainer