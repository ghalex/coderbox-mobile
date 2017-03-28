import React from "react";
import Tag from "./tag";
import { Flex } from "react-flex";

const Technologies = ({ items }) => {
	return (
		<div className="tag-list">
			<Flex>
				{items.map(
					(tech, index) => {
						return <Tag tag={tech} key={index} />;
					}
				)}
			</Flex>
		</div>
	)
}

export default Technologies;


Technologies.propTypes = {
	"items": React.PropTypes.array
}


