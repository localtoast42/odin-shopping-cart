import PropTypes from 'prop-types';

const ProductCard = ({ item }) => {

    return (
      <div>
        <img src={item.image} alt="" height='100px'/>
        <h3>{item.title}</h3>
        <div>
            <h4>{'$' + item.price.toFixed(2)}</h4>
            <input type="number" />
            <button>Add</button>
        </div>
      </div>
    );
};

ProductCard.PropTypes = {
    item: PropTypes.object.isRequired,
}

export default ProductCard;