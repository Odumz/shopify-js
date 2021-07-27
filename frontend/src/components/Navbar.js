
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({click}) => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

    return (
        <nav className="navbar">
            {/* logo */}
            <div className="navbar_logo">
                <h2>Shopify</h2>
            </div>

            {/* links */}
            <ul className="navbar_links">
                <li>
                    <Link to="/cart" className="cart_link">
                        {/* Icon */}
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="cartlogo_badge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="shop_link">
                        {/* Icon */}
                        Shop
                    </Link>
                </li>
            </ul>

            {/*hamburger menu*/}
            <div className="hamburger_menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
