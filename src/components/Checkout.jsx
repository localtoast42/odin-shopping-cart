import { useOutletContext } from "react-router-dom";

const Checkout = () => {

    const [shoppingCart, setShoppingCart] = useOutletContext();

    return (
        <div className="checkout-container">
            <div className="checkout-list"></div>
            <div className="checkout-total"></div>
            <div></div>
        </div>
    );
}

export default Checkout;