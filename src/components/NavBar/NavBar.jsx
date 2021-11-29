import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import { UseCartContext } from "../../Context/CartContext"
import imgLogo from './logo.png'


  const NavBar = () => {
 
    const { itemCounter } = UseCartContext()  

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-info" style={{minHeight: '10vh' }}>
                <Link to="/" >
                <img src={imgLogo} alt="logo" style={{height: "60px"}}></img>
                </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to = {"/category/1"} className="nav-link">
                        Perros
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to = {"/category/2"} className="nav-link">
                        Gatos
                    </Link>
                </li>
                </ul>
                <Link to="/cart">
                <CartWidget/>
                {itemCounter() !== 0 && itemCounter()}
                </Link>
            </div>
     </nav>
    )
}

export default NavBar