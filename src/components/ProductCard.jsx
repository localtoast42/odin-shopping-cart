import PropTypes from 'prop-types';

const ProductCard = ({ item }) => {

    return (
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img 
                src={item.image} 
                alt="" 
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
        </div>
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">{item.title}</h3>
            </div>
            <p className="text-sm font-medium text-gray-900">{'$' + item.price.toFixed(2)}</p>
        </div>
      </div>
    );
};

ProductCard.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ProductCard;