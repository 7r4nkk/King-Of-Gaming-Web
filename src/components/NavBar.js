import CartWidget from './Cart/CartWidget';
import '../css/NavBar.css'
import {Link} from 'react-router-dom'
function NavBar() {
    return (
        <div className='navGlobal'>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                        <Link to='/' style={{ textDecoration: 'none' }} className="navbar-brand">KING OF <span className='gaming'>GAMING</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' style={{ textDecoration: 'none' }} className="nav-link active" aria-current="page">Inicio</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to='/novedades' style={{ textDecoration: 'none' }} className="nav-link">Novedades</Link>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" href='/'>
                                    Productos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to='/categoria/procesadores' style={{ textDecoration: 'none' }} className="dropdown-item">Procesadores</Link></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><Link to='/categoria/motherboards' style={{ textDecoration: 'none' }} className="dropdown-item">Motherboards</Link></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><Link to='/categoria/placasdevideo' style={{ textDecoration: 'none' }} className="dropdown-item">Placas de video</Link></li>
                                </ul>   
                            </li>
                        </ul>
                        <Link to="/cart">
                            <CartWidget></CartWidget>
                        </Link>    
                    </div>
                </div>
            </nav>
        </div>
);
}
/* asd */
export default NavBar;