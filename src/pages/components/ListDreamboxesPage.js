import React from "react";
import AppBar from "material-ui/AppBar";
import { ListDreamboxes } from "dreamboxes";

const DreamboxesPage = ({}) => {

	const styles = { example: { position: "fixed", top: 0, }, };

	return (
		<div className="page">
			<AppBar title="Dreamboxes" style={styles.example} />
			<ListDreamboxes />
		</div>
	)
}

export default DreamboxesPage;