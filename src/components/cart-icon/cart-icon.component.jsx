import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg';
import { connect } from 'react-redux';
import { togglecartHidden } from '../../redux/cart/cart.action';
import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = (dispatch) =>({
    toggleCartHidden:()=>dispatch(togglecartHidden()),
})

export default connect(null,mapDispatchToProps)(CartIcon);