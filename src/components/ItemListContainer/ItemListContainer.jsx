import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({greetings}) => {
    return (
        <div className="itemListContainer">
            <p>{greetings}</p>
            <ItemCount stock={5} initial={1} onAdd/>
        </div>
        
    )
}


export default ItemListContainer