import ItemCount from "../ItemCount/ItemCount"

const Item = ({prod})=>{
    return(
        <>
            <div className="card" style={{ width: '18rem' }} key={prod.id}>
                <img src={prod.pictureUrl} className="card-img-top" alt="producto de mascota"></img>
                <div className="card-body">
                    <h5 className="card-title">{prod.title}</h5>
                    <p className="card-text">{prod.price}</p>
                    <ItemCount stock={5} initial={1} onAdd/>
                </div>
            </div>
        </>
    )
}


export default Item