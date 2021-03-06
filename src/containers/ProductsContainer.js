import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage } from './../actions/index';
class ProductsContainer extends Component {
	render() {
		var { products } = this.props; // lấy từ mapStateToProps
		return (
			//truyền vào 1 props(dạng children) bằng props tạo ở trên
			<Products> 
				{ this.showProducts(products) }
			</Products>
			
			
		);
	}
	showProducts(products){
		var result = null;
		var{ onAddToCart,onChangeMessage } =this.props;
		if(products.length > 0){
			result = products.map((product,index) => {
				return <Product 
						key={index} 
						product={ product }
						onAddToCart={onAddToCart}	
						onChangeMessage = {onChangeMessage}

						/>
			});
		}
		return result;
	}
}
ProductsContainer.propTypes ={
	products: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			inventory: PropTypes.number.isRequired,
			rating: PropTypes.number.isRequired
		})
	).isRequired,
	onAddToCart : PropTypes.func.isRequired,
	onChangeMessage : PropTypes.func.isRequired
	
}
const mapStateToProps = (state) => {
	return {
		products: state.products // chuyển thành props lấy từ reducers/index.js(store) 
	}
}
const mapDispatchToProps = (dispatch, props) =>{
	return {
		onAddToCart: (product) => { 
			dispatch(actAddToCart(product,1));// mua 1 sp
	  	},
		onChangeMessage: (message) => {
			dispatch(actChangeMessage(message));
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);
// mapDispatchToProps onChangMessage vì file này có btn giỏ hàng