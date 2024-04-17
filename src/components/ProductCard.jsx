import "./ProductCard.css";
import PropTypes from 'prop-types';

const ProductCard = ({ item }) => {

    return (
        <div>
            <img src={item.image} alt="" className="card-image"/>
            <h3>{item.title}</h3>
            <h4>{item.price}</h4>
            <button>Add</button>
        </div>
    );
};

ProductCard.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ProductCard;