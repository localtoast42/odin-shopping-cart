import PropTypes from 'prop-types';

const CheckoutItem = ({ title, price, image, quantity }) => {
    
    return (
        <div className='checkout-item'>
            <img src={image} alt="" className='checkout-image'/>
            <h3>{title}</h3>
            <h4>{'$' + price.toFixed(2)}</h4>
            <h4>{quantity}</h4>
            <h4>{'$' + (quantity * price.toFixed(2))}</h4>
        </div>
    );
}

CheckoutItem.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    quantity: PropTypes.number,
}

export default CheckoutItem;