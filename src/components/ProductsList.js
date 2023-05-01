import classes from "./ProductsList.module.scss";
import { Data } from "../Data/Data_24_04_23";
import { Link } from "react-router-dom";
import star from "../Images/star.png";
import discount from "../Images/discount.png";

const ProductsList = () => {
  const renderProductList = Data.map((product) => (
    <li key={product.id} className={classes.product}>
      <img src={product.image} alt="Product" className={classes.product__img} />
      <Link to={`${product.id}`} className={classes.product__name}>
        {product.name}
      </Link>

      <p className={classes.product__description}>{product.description}</p>

      <div className={classes.product_flex_1}>
        <div className={classes.product__rating}>
          <p className={classes.product__rating_span}>
            <img
              src={star}
              alt="star logo"
              className={classes.product__rating_star}
            />
            {product.rating}
          </p>
        </div>
        <div className={classes.product__discount}>
          <p className={classes.product__rating_span}>
            <img
              src={discount}
              alt="discount"
              className={classes.product__discount_disImg}
            />
            {product.discount}
          </p>
        </div>
      </div>

      <p className={classes.product__price}>&#8377;{product.price}</p>
      <a href={product.link} className={classes.product_link} target="_blank">
        Click here to Buy
      </a>
      <p className={classes.product_note}>(will redirect to amazon)</p>
    </li>
  ));

  return <section className={classes.container}>{renderProductList}</section>;
};

export default ProductsList;
