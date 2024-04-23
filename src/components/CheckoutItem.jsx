const CheckoutItem = ({ title, price, image, quantity }) => {
    
    return (
        <div>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <h4>{'$' + price.toFixed(2)}</h4>
        </div>
    );
}

export default CheckoutItem;