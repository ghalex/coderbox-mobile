import React from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import ArrowBack from "material-ui/svg-icons/navigation/arrow-back";
import { DisplayDreambox } from "dreamboxes";

class DreamboxPage extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		//console.log(this.props.params)
	}

	handleBack() {
		const { router } = this.context;
		router.replace("/");
	}

	render() {
		console.log("render")
		return (
			<div className="page">
				<AppBar
					title="Dreambox - no.2"
					iconElementLeft={<IconButton><ArrowBack /></IconButton>}
					onLeftIconButtonTouchTap={(e) => this.handleBack(e)} />
				
				<div>
					<DisplayDreambox boxId={this.props.params.id} />
				</div>
			</div>
		)
	}
};


DreamboxPage.contextTypes = {
	router: React.PropTypes.object
};

export default DreamboxPage;