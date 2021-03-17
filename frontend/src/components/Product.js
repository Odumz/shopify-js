import './Product.css'
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className="product">
            <img src="https://res.cloudinary.com/griffintech/image/upload/v1615980914/tutorials/pexels-skylar-kang-6044266_xfkqdv.jpg" alt="product_name" />
            <div className="product_info">
                <p className="info_name">Product 1</p>
                <p className="info_description">
                    Exercitation minim Lorem ut fugiat aute exercitation dolore mollit Lorem nostrud esse non adipisicing. 
                </p>
                <p className="info_price">$499.99</p>

                <Link to={`/product/${'6051ef41052f383ce9ccafb4'}`} className="info_button">View</Link>
            </div>
        </div>
    )
}

export default Product;
