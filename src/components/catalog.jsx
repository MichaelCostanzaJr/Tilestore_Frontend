import './catalog.css';
import Product from './product';
import Dataservice from '../services/dataService';
import { useState, useEffect } from 'react';


const Catalog = () => {
    let [products, setProducts] = useState([]);

    const loadCatalog = async () => {
        let service = new Dataservice();
        let data = await service.getCatalog();
        setProducts(data);
    };

    useEffect(() => {
        loadCatalog();
    }, []);


    return(<div className= 'catalog'>
            <div className='background_header'>
                <h1 className='h1'>This is our amazing catalog</h1>
                <h3 className='h3'>We Have {products.length} products!</h3>
            </div>
            {
                products.map((prod) => (<Product key={prod._id} data={prod}></Product>))
            }
    </div>);
};

export default Catalog;