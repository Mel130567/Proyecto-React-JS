import CartWidget from "../CartWidget/CartWidget"

  const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <a className="navbar-brand" href="#">Patitas pet-shop</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Perros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Gatos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Servicios</a>
                </li>
                </ul>
                <CartWidget/>
            </div>
     </nav>
    )
}

export default NavBar