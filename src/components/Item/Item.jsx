
const Item = ({prod})=>{
    return(
        <>
            <div className="card m-5 h-100" style={{ width: '18rem' }} key={prod.id}>
                <h5 className="card-title py-2">{prod.title}</h5>
                <img src={prod.pictureUrl} className="card-img-top" alt="producto de mascota"></img>
                <div className="card-body">
                    <a href="#" className="btn btn-primary">Ver detalle</a>
                </div>
            </div>
        </>
    )
}


export default Item 