import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import empty_cart from '../../assests/empty_cart.png';
import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';

// to chk the otherProps property includes dispatch
// const CartDropdown = ({  cartItems, history, ...otherProps }) => {
    //     console.log(otherProps)
    //     return ( 

// add dispatch
const CartDropdown = ({  cartItems, history, dispatch }) => (
        <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length
                ? (cartItems.map( (cartItem) => (
                    <CartItem key={cartItem.id}
                    item={cartItem}
                    />
                ))
                ) : (
                    <div className="empty-message">
                    <Link className='option' to='/shop'>
                    <img src={empty_cart} alt='empty_cart' /><br/>
                    <span className="empty-message">Your cart is Empty,
                    Go to Our Shopping page
                    </span>
                    </Link>
                    </div>
                )
            }
        </div>
            {/* after adding history add onclick */}
            <CustomButton onClick={() => {
                history.push('/CheckOut');
                dispatch(toggleCartHidden())
                // to hide the cartdrop down when pressing this custom_btn and going in checkut page
                }}>
                GO TO CHECKOUT
            </CustomButton>
    </div>
    );
// }

// const mapStateToProps = state => ({
//     cartItems: selectCartItems(state)
// });

// after adding createStructuredSelector
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

// It makes sure, that the cart dropdown component don't re-render whenever state changes that is un-related to cart items. ie. If we sign out, It makes sure cart items in cart dropdown and cart count, doen't change with any other state change takes place

// before adding selectCartItems
// const mapStateToProps = ({ cart: {cartItems} }) => ({
//     cartItems
// });

export default withRouter(connect(mapStateToProps)(CartDropdown));
