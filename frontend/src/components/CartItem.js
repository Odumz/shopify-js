import './CartItem.css'
import { Link } from 'react-router-dom'

const CartItem = () => {
    return (
        <div className="cartitem">
            <div className="cartitem_image">
                <img src="https://res.cloudinary.com/griffintech/image/upload/v1615981712/tutorials/pexels-karolina-grabowska-4464819_fk6lte.jpg" alt="product name" />
            </div>
            <Link to={`/product/{11}`} className="cartitem_name">
                <p>Product 1</p>
            </Link>
            <p className="cartitem_price">$499.99</p>
            <select className="cartitem_select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

            <button className="cartitem_deleteBtn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default CartItem
