import React from "react";
import AppBar from "material-ui/AppBar";
import { Dreambox } from "dreamboxes";


const boxes = [
	{
		id: 1,
		name: "Dreamboxe - no.1",
		icon: "https://s3-eu-west-1.amazonaws.com/coderbox/technologies/javascript.png",
		tags: [{id: 1, name:"HTML"}],
		titles: [{id: 1, name: "Developer"}]
	},
	{
		id: 2,
		name: "asdf222asdf"
	},
	{
		id: 3,
		name: "asdf3434asdf"
	}
]

const DreamboxesPage = ({ }) => {

	return (
		<div className="page">
			<AppBar title="Dreamboxes" />
			<div className="dreambox-collection">
				{ boxes.map(
					(box, index) => {
						return <Dreambox key={box.id} />;
					}
				)}
			</div>
		</div>
	)
}

export default DreamboxesPage;