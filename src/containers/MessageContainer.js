import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from './../components/Message';
class MessageContainer extends Component {
	render() {
		var {message} = this.props;
		return (
			<Message message={message} />
		);
	}
}
MessageContainer.propTypes = {
	message : PropTypes.string.isRequired //message.js ở initialState cùng là String
}
const mapStateToProps = (state) => {
	return {
		message: state.message //reducer/index.js
	}
}

export default connect(mapStateToProps,null)(MessageContainer);
