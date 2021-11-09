import Item from "../Item/Item"

const ItemList= ({productos}) => {
    return (
        <>
        {productos.map(prod => <Item prod={prod}/> )}   
        </>
    )
}

export default ItemList
   