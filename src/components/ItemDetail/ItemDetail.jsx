import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({productos}) =>{
    return(
        <>
            <div className="card" style={{width: "18rem"}} key={productos[0].id}>
                <img src={productos[0].pictureUrl} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{productos[0].tittle}</h5>
                    <p className="card-text">{productos[0].description}</p>
                    <p className="card-text">{productos[0].price}</p>
                    <ItemCount stock={5} initial={1} onAdd/>
                </div>
            </div>
        </>
    )
}

export default ItemDetail