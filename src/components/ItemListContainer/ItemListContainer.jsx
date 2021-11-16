import React, {useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList"
import { productos } from "../../service/productos"
import { Spinner } from "react-bootstrap"
import {useParams} from 'react-router-dom';

const verProductos = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(productos)
    }, 2000)
})

const ItemListContainer = () => {

const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)

const {categoryId} = useParams()

useEffect(()=>{
    verProductos
    .then(
        res =>{
            if(categoryId === undefined){
                setProductos(res)
            }else{
                setProductos(res.filter(prod => prod.category == categoryId))
            }
        }
    )
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
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