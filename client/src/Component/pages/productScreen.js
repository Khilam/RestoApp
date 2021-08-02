import "./productScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getItemDetails } from "../Action/item";
import { addToCart } from "../Action/commande";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, datas} = productDetails;

  useEffect(() => {
    if (datas && match.params.id !== datas._id) {
      dispatch(getItemDetails(match.params.id));
    }
  }, [dispatch, match, datas]);

  const addToCartHandler = () => {
    dispatch(addToCart(datas._id, qty));
    history.push(`/cart`);
  };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={datas.imageUrl} alt={datas.title} />
            </div>
            <div className="left__info">
              <p className="left__name">{datas.title}</p>
              <p>Price: ${datas.price}</p>
              <p>Description: {datas.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${datas.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {datas.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(datas.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
