import React from "react";
import AppBar from "material-ui/AppBar";
import { ViewDreamboxes } from "dreamboxes";

const DreamboxesPage = ({}) => {

	return (
		<div className="page">
			<AppBar title="Dreamboxes" />
			<ViewDreamboxes />
		</div>
	)
}

export default DreamboxesPage;