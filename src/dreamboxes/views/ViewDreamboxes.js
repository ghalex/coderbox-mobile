import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Dreambox from "../components/Dreambox";
import * as actions from "../actions";

class ViewDreamboxes extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { onReady } = this.props;
		onReady();
	}

	render() {
		const { boxes } = this.props;

		return (
			<div className="dreambox-collection">
				{boxes.map(
					(box) => {
						return <Dreambox key={box._id} box={box} />;
					}
				)}
			</div>
		);
	}
};

ViewDreamboxes.propTypes = {
	"onReady": PropTypes.func,
}

ViewDreamboxes.defaultProps = {
	"boxes": []
}

const mapState = (state) => {
	return {
		boxes: state.dreamboxes.items
	}
}

const mapDispatch = (dispatch) => {
	return {
		onReady: () => {
			dispatch(actions.loadDreamboxes())
		}
	}
}

export default connect(mapState, mapDispatch)(ViewDreamboxes);