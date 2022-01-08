export const addItemToCart = (cartItems, itemToAdd)=>{
    const existingCartItem=cartItems.find(cartItem => cartItem.id===itemToAdd.id)
    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id===itemToAdd.id ? {...cartItem, quantity:cartItem.quantity+1} : cartItem)

    }
    return [...cartItems,{...itemToAdd ,quantity:1}];
}

export const removeItemToCart = (cartItems, itemTORemove)=>{
    const existingCartItem=cartItems.find(cartItem => cartItem.id===itemTORemove.id)
    if(existingCartItem.quantity===1)
        return cartItems.filter(cartItem=>cartItem.id!==itemTORemove.id)
    return cartItems.map(cartItem=>cartItem.id===itemTORemove.id ? {...cartItem,quantity:cartItem.quantity-1} :cartItem)
}