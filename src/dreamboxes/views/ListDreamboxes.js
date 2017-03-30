import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Dreambox from "../components/Dreambox";
import * as actions from "../actions";
import * as selectors from "../selectors";

class ListDreamboxes extends React.Component {
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

ListDreamboxes.propTypes = {
	"boxes": PropTypes.array,
	"onReady": PropTypes.func,
}

ListDreamboxes.defaultProps = {
	"boxes": []
}

const mapState = (state) => {
	return {
		"boxes": selectors.all(state)
	}
}

const mapDispatch = (dispatch) => {
	return {
		onReady: () => {
			dispatch(actions.loadDreamboxes())
		}
	}
}

export default connect(mapState, mapDispatch)(ListDreamboxes);