import React, { useEffect } from 'react';
import './Cart.css';
import Productlist from '../../../SharedComponents/Products/Productlist/Productlist';
import { useStateValue } from '../../../StateProvider/StateProvider';

const Cart = () => {
  const isCart = true;
  const [state, dispatch] = useStateValue();
  const total = state.cart.reduce((accumulator, product) => {
    return (accumulator = accumulator + parseInt(product.price));
  }, 0);
  const keepCartSummary = () => {
    dispatch({
      type: 'KEEP_CART_SUMMARY',
      cartSummary: {
        total: total,
        items: state.cart.length,
      },
    });
  };
  return (
    <div className='cart'>
      <Productlist isCart={isCart} />
      <div className='cart__Summary'>
        <div className='total__items'>Items: {state.cart.length}</div>
        <div className='total__price'>Price: {total}</div>
      </div>
    </div>
  );
};

export default Cart;
