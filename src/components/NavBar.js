import CartWidget from './CartWidget';
import '../css/NavBar.css'
import {Link} from 'react-router-dom'
function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <a className="navbar-brand" href="#"><img src="bolt-alt-w.svg" alt="" width="30" height="24" className="d-inline-block align-text-top flash"></img>KING OF <span className='gaming'>GAMING</span></a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                                </li>
                            </Link>
                            <Link to='/novedades' style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Novedades</a>
                                </li>
                            </Link>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to='/categoria/procesadores' style={{ textDecoration: 'none' }}>
                                        <li><a className="dropdown-item" href="#">Procesadores</a></li>
                                    </Link>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <Link to='/categoria/placasdevideo' style={{ textDecoration: 'none' }}>
                                        <li><a className="dropdown-item" href="#">Placas de video</a></li>
                                    </Link>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <Link to='/categoria/motherboards' style={{ textDecoration: 'none' }}>
                                        <li><a className="dropdown-item" href="#">Motherboards</a></li>
                                    </Link>
                                </ul>   
                            </li>
                        </ul>
                        <CartWidget></CartWidget>
                    </div>
                </div>
            </nav>
        </div>
);
}

export default NavBar;