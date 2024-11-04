import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const ProductCard = ({item}) => {
    const {image, productName, price} = item;
    return (
        <div className='p-5 bg-white rounded-2xl border border-zinc-200'>
            <img className='w-full' src={image} alt="" />
            <h3 className='text-xl font-semibold mt-7'>{productName}</h3>
            <p>${price}</p>
            <Link>
            <button>
                View Details
            </button>
            </Link>
        </div>
    );
};

ProductCard.propTypes = {
    item: PropTypes.object.isRequired,
};

export default ProductCard;