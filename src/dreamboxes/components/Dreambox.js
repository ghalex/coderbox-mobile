import React from "react";
import { Flex } from "react-flex";

const Dreambox = ({ }) => {

	return (
		<div className="dreambox">
			<Flex>
				<img src="https://s3-eu-west-1.amazonaws.com/coderbox/technologies/javascript.png" height="50" />
				<div>
					<a className="title" href="#/dreambox/6">Dreambox - No.6</a>
					<div>
						<span>23 Mar 2017</span>
						<a href="/dreambox/6">Open</a>
					</div>
				</div>
			</Flex>
		</div>
	)
}

export default Dreambox;
