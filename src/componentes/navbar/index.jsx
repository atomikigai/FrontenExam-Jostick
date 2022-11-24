import './navbar.css';
import Logo from '../../assets/logo.webp';

const Navbar = () =>{
    return(
        <nav className="navbar">
            <div className='izquierdo'>
                <div className='logo'>
                    <img src={Logo} alt="logo de concepts life" />
                </div>
                <ul>
                    <li>
                        trends
                    </li>
                    <li>
                        collections
                    </li>
                    <li>
                        tips & guides
                    </li>
                </ul>
            </div>
            <div className='derecho'>
                <ul>
                    <li>
                        find a store
                    </li>
                    <li>
                        contact us
                    </li>
                    <li>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;