import {Link} from 'react-router-dom';

const Item = ({prod})=>{
    return(
        <>
            <div className="card m-5 h-100" style={{ width: '18rem' }} key={prod.id}>
                <h5 className="card-title py-2">{prod.title}</h5>
                <img src={prod.pictureUrl} className="card-img-top" alt="producto de mascota"></img>
                <div className="card-body">
                    <Link to = {`/detail/${prod.id}`}>
                        <button className="btn btn-primary">
                            Ver detalle
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}


export default Item 