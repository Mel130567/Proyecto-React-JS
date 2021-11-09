import React, {useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList"
import { productos } from "../../service/productos"

const verProductos = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(productos)
    }, 2000)
})

const ItemListContainer = ({greetings}) => {

const [productos, setProductos]= useState([])

useEffect(()=>{
    verProductos
    .then(
        res =>{
            setProductos(res)
        }
    )
    .catch(err => console.log(err))
    .finally(console.log(productos))
    },[])
    
    return (
        <div className="itemListContainer">
            <p>{greetings}</p>
            <ItemList productos={productos}/>
        </div>
        
    )
}


export default ItemListContainer