var initialState = [
    {
        id: 1,
        name: 'Iphone 7',
        image: 'https://product.hstatic.net/1000063620/product/iphone-7-mhm_63bfd9034fc948898edb0517e3395187_grande.jpg',
        description: 'Sản phẩm của Apple',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Iphone 7+',
        image: 'https://hoanghamobile.com/i/preview/Uploads/2020/09/16/iPhone-7-Plus.png',
        description: 'Sản phẩm của Apple store',
        price: 400,
        inventory: 15,
        rating: 3

    },
    {
        id: 3,
        name: 'Iphone 8',
        image: 'http://product.hstatic.net/1000376113/product/7_pl_5ba15e15c9734790a9a7fa0881a72a8a_grande.jpg',
        description: 'Sản phẩm của Apple app',
        price: 300,
        inventory: 5,
        rating: 5

    }
    
];
const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
}
export default products