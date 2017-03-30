import React from "react";
import AppBar from "material-ui/AppBar";
import { ViewDreamboxes } from "dreamboxes";

const DreamboxesPage = ({}) => {

	const styles = { example: { position: "fixed", top: 0, }, };

	return (
		<div className="page">
			<AppBar title="Dreamboxes" style={styles.example} />
			<ViewDreamboxes />
		</div>
	)
}

export default DreamboxesPage;