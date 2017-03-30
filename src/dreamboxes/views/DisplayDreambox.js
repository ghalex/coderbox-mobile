import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Dreambox from "../components/Dreambox";
import * as actions from "../actions";
import * as selectors from "../selectors";

class DisplayDreambox extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { onReady } = this.props;
		onReady();
	}

	render() {
		console.log(this.props.box)
		return  <Dreambox box={this.props.box} />
	}
};

DisplayDreambox.propTypes = {
	"boxId": PropTypes.number,
	"onReady": PropTypes.func,
}

DisplayDreambox.defaultProps = {
}

DisplayDreambox.contextTypes = {
	router: PropTypes.object
};


const mapState = (state, ownProps) => {
	return {
		box: selectors.one(state, ownProps)
	}
}

const mapDispatch = (dispatch) => {
	return {
		onReady: () => {
		}
	}
}

export default connect(mapState, mapDispatch)(DisplayDreambox);