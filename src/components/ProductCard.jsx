import "./ProductCard.css";
import { useState } from "react";
import PropTypes from 'prop-types';

const ProductCard = ({ item }) => {

    const [quantity, setQuantity] = useState(0);

    function handleIncrease() {
        if (quantity < 99) {
            const newQty = quantity + 1;
            setQuantity(newQty);
        }
    }

    function handleDecrease() {
        if (quantity > 0) {
            const newQty = quantity - 1;
            setQuantity(newQty);
        }
    }

    return (
        <div className="product-card">
            <img src={item.image} alt="" className="card-image"/>
            <h3 className="product-title">{item.title}</h3>
            <div>
                <h4 className="product-price">{'$' + item.price.toFixed(2)}</h4>
                <div>
                    <div className="qty-input">
                        <button className="qty-btn" onClick={handleDecrease}>-</button>
                        <div className="qty">{quantity}</div>
                        <button className="qty-btn" onClick={handleIncrease}>+</button>
                    </div>
                    <button className="add-cart-btn">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ProductCard;