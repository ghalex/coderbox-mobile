import React from "react";
import { Flex } from "react-flex";
import TitleList from "./TitleList";
import Technologies from "./Technologies";
import Author from "./Author.js";

const Dreambox = ({ box }) => {
	return (
		<div className="dreambox">
			<Flex className="topPart">
				<img src={box.icon} height="50" />
				<div>
					<a className="title" href="#/dreambox/6">{box.name}</a>
					<div>
						<span>23 Mar 2017</span>
						<a href="/dreambox/6">Open</a>
					</div>
				</div>
			</Flex>
			<Technologies items={box.technologies} />
			<label className="titles">job title</label>
			<TitleList titles={box.titles} />
			<label className="titles">published by:</label>
			<Author by={box.by}/>
		</div>
	)
}

export default Dreambox;


Dreambox.propTypes = {
	"box": React.PropTypes.object
}