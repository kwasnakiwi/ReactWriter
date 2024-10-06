import logo from './assets/images/Rectangle 1 (1).png';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav>
        <Link to='/'><img src={logo} alt="Logo" /></Link>
        <div className="hamburger">&#9776;</div>
        <div className="nav-links">
            <Link to='/about_me'>O MNIE</Link>
            <Link to='/books'>KSIĄŻKI</Link>
            <Link to='/galery'>GALERIA</Link>
            <Link to='/contact'><b>KONTAKT</b></Link>
        </div>
      </nav>
    )
}

export default Navbar