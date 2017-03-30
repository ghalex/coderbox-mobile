import React from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import ArrowBack from "material-ui/svg-icons/navigation/arrow-back";

class DreamboxPage extends React.Component {

	constructor(props) {
		super(props);
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
				<div onClick={(e) => this.handleBack(e)}>
					here is the box
				</div>
			</div>
		)
	}
};


DreamboxPage.contextTypes = {
	router: React.PropTypes.object
};

export default DreamboxPage;