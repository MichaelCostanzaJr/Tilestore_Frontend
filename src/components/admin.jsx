import "./admin.css";
import { useState, useEffect } from "react";
import Dataservice from '../services/dataService';


const Admin = () => {
  const [product, setProduct] = useState({});
  const [coupon, setCoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);
  const [allProducts, setAllProducts] = useState([]); 
  
  const saveProduct = async () => {
    console.log("Saving product", product);


    let service = new Dataservice();

    let productCopy = {...product};

    productCopy.price = +productCopy.price;

    await service.saveProduct(productCopy);

    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
  };
  
  const textChanged = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    let copy = { ...product };
    copy[name] = val;
    setProduct(copy);
  };

  const couponChanged = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    let copy = {...coupon};
    copy[name] = val;
    setCoupon(copy);
  };

  const saveCoupon = async () => {
    console.log("Saving coupon", coupon)

    let service = new Dataservice();
    let couponCopy = {...coupon}
    couponCopy.discount = parseFloat(couponCopy.discount);
    await service.saveCoupon(couponCopy);

    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);

    }; 
  
  const loadProducts = async () => {
    let service = new Dataservice();
    let data = await service.getProducts();
    setAllCoupons(data);

  };


  const loadCoupons = async() => {
    let service = new Dataservice();
    let data = await service.getCoupons();
    setAllCoupons(data);
  };

    useEffect = (() => {
      loadCoupons();
      loadProducts();
    }, []);



  return (
    <div className="admin-page">
      <h1>Admin Administration</h1>

      <div className="content">
        <section className="products">
          <h2>Register New Product</h2>
        

        <div className="field">
          <label>Title</label>
          <input
            name="title"
            onChange={textChanged}
            className="form-control"
            type="text"
          ></input>
        </div>

        <div className="field">
          <label>Category</label>
          <input
            name="category"
            onChange={textChanged}
            className="form-control"
            type="text"
          ></input>
        </div>

        <div className="field">
          <label>Image</label>
          <input
            name="image"
            onChange={textChanged}
            className="form-control"
            type="text"
            placeholder="image name"
          ></input>
        </div>

        <div className="field">
          <label>Price</label>
          <input name="price" onChange={textChanged} className="form-control" type="number"></input>
        </div>

        <div className="field">
          <button onClick={saveProduct} className="btn btn-primary">
            Register Product
          </button>
        </div>

        <hr />

        <ul>
            {allProducts.map((p, index) => (
                <li key={index}>
                    {p.title} - {p.price}
                </li> 
            ))}
        </ul>

        </section>

        <secton className="coupons">
          <h3>Coupon Codes</h3>

            <div className="field">
            <label>Code</label>
            <input name="code"onChange={couponChanged}className="form-control"type="text" />
            </div>

            <div className="field">
                <label>Discount</label>
                <input name="discount" onChange={couponChanged} className="form-control" type="number" />
            </div>

            <div className="field">
            <button onClick={saveCoupon} className="btn btn-primary">
                Register Coupon
            </button>
            </div>

            <hr />
            <ul>
                {allCoupons.map((c, index) => (
                    <li key={index}>
                        {c.code} - {c.discount}
                    </li> 
                ))}
            </ul>
        </secton>
      </div>
    </div>
  );
};

export default Admin;
