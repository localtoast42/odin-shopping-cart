import "./ProductCard.css";
import { useState } from "react";
import PropTypes from 'prop-types';

const ProductCard = ({ item, shoppingCart, setShoppingCart }) => {

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

    function handleAddToCart() {
        const newShoppingCart = [...shoppingCart]
        const result = shoppingCart.filter((entry) => entry.id === item.id)
        if (result.length > 0) {
            result.pop().quantity += quantity;
        } else {
            const newCartEntry = {
                id: item.id,
                title: item.title,
                price: item.price,
                image: item.image,
                quantity: quantity,
            }
            newShoppingCart.push(newCartEntry);
        }

        setShoppingCart(newShoppingCart);
        setQuantity(0);
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
                    <button className="add-cart-btn" onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    item: PropTypes.object.isRequired,
    shoppingCart: PropTypes.array,
    setShoppingCart: PropTypes.func,
}

export default ProductCard;