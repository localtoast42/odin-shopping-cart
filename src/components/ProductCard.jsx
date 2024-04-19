import "./ProductCard.css";
import PropTypes from 'prop-types';

const ProductCard = ({ item }) => {

    return (
        <div className="product-card">
            <img src={item.image} alt="" className="card-image"/>
            <h3 className="product-title">{item.title}</h3>
            <div>
                <h4 className="product-price">{'$' + item.price.toFixed(2)}</h4>
                <div>
                    <input type="number" className="qty-input"/>
                    <button className="add-cart-btn">Add</button>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ProductCard;