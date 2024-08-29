import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <header>
                <div>
                    <img src="src\assets\234651779-57fda175-62bd-4930-909d-052836ccaeaa.jpg" alt="logo" />
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/registro">Registro</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Header;