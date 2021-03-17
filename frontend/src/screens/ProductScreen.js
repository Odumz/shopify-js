import './ProductScreen.css';
// import { Link } from 'react-router-dom';

const ProductScreen = () => {
    return (
        <div className="productscreen">
            <div className="productscreen_left">
                <div className="left_image">
                    <img src="https://res.cloudinary.com/griffintech/image/upload/v1615981712/tutorials/pexels-adrian-dorobantu-2300334_vnd6uo.jpg" alt="product name" />
                </div>
                <div className="left_info">
                    <p className="left_name">Product 1</p>
                    <p className="left_price">Price: $1999.99</p>
                    <p className="left_description">Description: Ipsum qui elit adipisicing deserunt in ex eiusmod proident elit excepteur nisi reprehenderit excepteur.</p>
                </div>
            </div>
            <div className="productscreen_right">
                <div className="right_info">
                    <p>
                        Price: <span>$499.99</span>
                    </p>
                    <p>
                        Status: <span>In stock</span>
                    </p>
                    <p>
                        Qty
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </p>
                    <p>
                        <button type="button">Add to Cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
