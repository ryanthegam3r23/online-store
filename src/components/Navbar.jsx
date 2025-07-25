import { use, useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import DataContext from '../state/DataContext';


function Navbar() {

    const user = useContext(DataContext).user
    const cart = useContext(DataContext).cart

    return (
        <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Online Store</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog">Catalog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/admin">Admin</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <Link className='btn btn-outline-light btn-user' to="/login">
                            {user.name}
                        </Link>

                        <Link className="btn btn-outline-light" to="/cart">
                             <span className="badge text-bg-primary">{cart.length}</span>
                            View Cart
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;