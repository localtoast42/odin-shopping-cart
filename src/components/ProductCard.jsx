import PropTypes from 'prop-types';

const ProductCard = ({ item }) => {

    return (
      <div>
        <img src={item.image} alt="" height='100px'/>
        <h3>Product</h3>
        <div>
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