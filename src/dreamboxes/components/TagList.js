import React from "react";
import Tag from "./tag";
import { Flex } from "react-flex";

const TagList = ({ technologies }) => {
	return (
			<div className="tag-list">
                <Flex>
 				{ technologies.map(
					(tech, index) => {
                        //return <div>{tech.name}</div>
						return <Tag tag={tech} key={index} />;
					}
				)}
                </Flex>
			</div>
	)
}

export default TagList;


TagList.propTypes = {
	"technologies": React.PropTypes.array
}


