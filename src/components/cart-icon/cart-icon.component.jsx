import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg';
import { connect } from 'react-redux';
import { togglecartHidden } from '../../redux/cart/cart.action';
import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapStateToProps= ({cart:{cartItems}})=>({
    itemCount:cartItems.reduce((acc,item)=>acc+item.quantity,0)
})

const mapDispatchToProps = (dispatch) =>({
    toggleCartHidden:()=>dispatch(togglecartHidden()),
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
