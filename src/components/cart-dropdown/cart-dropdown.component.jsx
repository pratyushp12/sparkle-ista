import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss';
import { withRouter } from 'react-router-dom';
import {togglecartHidden} from '../../redux/cart/cart.action'

const CartDropdown=({cartItems, history, dispatch})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {cartItems.length ? 
            (cartItems.map(cartItem =>
                <CartItem key={cartItem.id} item={cartItem} />
            )) :
            (<span className='empty-cart'>Your Cart is Empty</span>)
        }
        </div>
        <CustomButton onClick={()=>{
        history.push('/checkout');
        dispatch(togglecartHidden());
        }}>CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));