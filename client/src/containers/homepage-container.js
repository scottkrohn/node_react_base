import React, { Component } from 'react';
import { connect } from "react-redux";

class HomepageContainer extends Component {
	render = () => {
		return (
			<div>
				<h3>I am the homepage container.</h3>
			</div>
		);
	}
}

const mapStateToProps = state => state;

const mapActionsToProps = {};

export default connect(
	mapStateToProps,
	mapActionsToProps
)(HomepageContainer);