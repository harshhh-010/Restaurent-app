import React from "react";
import { useDispatch, useSelector } from "react-redux";
import image from "../Assets/1F.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { addToCart, decreaseQuantity } from "../redux/Action/foodCartAction";

const Menu = ({ product }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id)
  );

  const quantity = cartItem ? cartItem.quantity : 0;
  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  const handleIncreaseQuantity = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  const handleDecreaseQuantity = (e) => {
    e.stopPropagation();
    if (quantity > 0) {
      dispatch(decreaseQuantity(product.id));
    }
  };

  return (
    <div>
      <div className="p-3 bg-white">
        <div className="product-container relative m-2 p-8 h-40 rounded-lg shadow-2xl bg-white flex">
          <img
            src={image}
            alt=""
            className="h-24 w-24 rounded-md object-cover object-center"/>

          {quantity === 0 ?
             (<button className=" text-center absolute bottom-4 left-0 flex items-center bg-peel-orange-custom rounded-e-md w-20 font-medium justify-center h-8"onClick={handleAddToCart}>
             ADD +
            </button>)
          :
          (<div className="absolute bottom-4 left-0 flex items-center bg-peel-orange-custom rounded-e-md w-20 h-8 font-medium justify-center">
            <button
              className="text-2xl text-center"
              onClick={handleDecreaseQuantity}
            >
              -
            </button>
            <span className="w-8 text-center">{quantity}</span>
            <button
              className="text-2xl text-center"
              onClick={handleIncreaseQuantity}
            >
              +
            </button>
          </div>
          )};
          <div className="inner-box ml-5 mt-1">
            <p className="font-bold">{product.name}</p>
            <div className="price-rating flex">
              <p className="font-medium">Price: ${product.price}</p>
              <p className="ml-3 font-medium">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-peel-orange-custom"
                />{" "}
                {product.rating}/5
              </p>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
