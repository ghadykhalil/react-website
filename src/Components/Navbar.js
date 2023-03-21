import { Link} from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {

    return (
        <div className="navBar">
            <h1>React-website</h1>
            <ul>
                <li><Link to="/register" className='link'>Register</Link></li>
                <li><Link to="/dashboard" className='link'>Dashboard</Link></li>
            </ul>           
        </div>
    )
}


export default Navbar;