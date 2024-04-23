import PropTypes from 'prop-types';

const CheckoutItem = ({ title, price, image, quantity }) => {
    
    return (
        <div>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <h4>{'$' + price.toFixed(2)}</h4>
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