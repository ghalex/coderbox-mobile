import React from "react";

const Tag = ({ tag }) => {

	return (
		<div className="tag">
		    {tag.name}
		</div>
	);
};

Tag.propTypes = {
	"tag": React.PropTypes.object
}

export default Tag;