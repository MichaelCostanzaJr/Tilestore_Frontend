import './product.css';
import QuantityPicker from './quantityPicker';

const Product = () => {
    return (<div className='product'>
        <img src='https://i.picsum.photos/id/990/200/300.jpg?hmac=6QkvunJPzSUAgkuY7p_hlJq5SmEdhlV01fbh5cMzKgg'></img>
        <h2>Title</h2>
        <label>$Price</label>
        <label>Total</label>
        <QuantityPicker></QuantityPicker>
        <button>Add To Cart</button>
        </div>);
};

export default Product;
