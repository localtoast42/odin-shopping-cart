import "./ProductCard.css";
import PropTypes from 'prop-types';

const ProductCard = ({ item }) => {

    return (
        <div className="product-card">
            <img src={item.image} alt="" className="card-image"/>
            <h3>{item.title}</h3>
            <h4>{'$' + item.price.toFixed(2)}</h4>
            <button>Add</button>
        </div>
    );
};

ProductCard.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ProductCard;