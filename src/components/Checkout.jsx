import './Checkout.css';
import { useOutletContext } from "react-router-dom";
import CheckoutItem from "./CheckoutItem";

const Checkout = () => {

    const [shoppingCart, setShoppingCart] = useOutletContext();

    function handleSubmit() {
        setShoppingCart([]);
    }

    return (
        <div className="checkout-container">
            <div className="checkout-list">
                <div className="checkout-header">
                    <div></div>
                    <h2>Item</h2>
                    <h2>Price</h2>
                    <h2>Quantity</h2>
                    <h2>Subtotal</h2>
                </div>
                {shoppingCart.map(item => <CheckoutItem
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    quantity={item.quantity} />
                )}
            </div>
            <div className="checkout-total">
                <div></div>
                <div></div>
                <div></div>
                <h3>Total</h3>
                <h3>$100</h3>
            </div>
            <div className="checkout-submit">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <button className="order-submit-btn" onClick={handleSubmit}>Submit Order</button>
            </div>
        </div>
    );
}

export default Checkout;