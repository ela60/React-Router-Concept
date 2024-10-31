
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact us</Link>
                <Link to="/user">User </Link>
                <Link to="/posts">Posts </Link>
                
            </nav>

        </div>
    );
};

export default Header;