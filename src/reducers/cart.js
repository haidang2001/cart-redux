import * as types from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

//thêm cứng
// var initialState= [
//     {
//         product: {
//             id: 1,
//             name: 'Iphone 7',
//             image: 'https://product.hstatic.net/1000063620/product/iphone-7-mhm_63bfd9034fc948898edb0517e3395187_grande.jpg',
//             description: 'Sản phẩm của Apple',
//             price: 500,
//             inventory: 10,
//             rating: 4
//         },
//         quantity: 5
//     },
//     {
//         product: {
//             id: 3,
//             name: 'Iphone 8',
//             image: 'http://product.hstatic.net/1000376113/product/7_pl_5ba15e15c9734790a9a7fa0881a72a8a_grande.jpg',
//             description: 'Sản phẩm của Apple app',
//             price: 300,
//             inventory: 5,
//             rating: 5
    
//         },
//         quantity: 5
//     }
// ]

const cart = (state = initialState, action) => {
    var{product,quantity} = action;
    var index = -1;
    switch(action.type){
        case types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if(index !== -1){ // có trong giỏ hàng thì cộng sl lên
                state[index].quantity += quantity;
            }
            else{

                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state,product);
            if(index !== -1){
                state.splice(index,1);
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state];
        case types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state,product);
            if(index !== -1){
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state];
        default: return [...state];
    }
}
var findProductInCart = (cart,product) =>{
    var index = -1; // -1 là ko tìm thấy trong giỏ hàng
    if(cart.length> 0){
        for(var i =0 ;i<cart.length; i++){
            if(cart[i].product.id === product.id){ // kiểm tra id của phần tử i trong cart có trùng với id của product đc thêm vô ?
                index=i;
                break;
            }
        }
    }
    return index;
}
export default cart