import React from "react";

const Author = ({ by }) => {
	return (
		<div className="author">
			<a href={by.url} target="_blank">
				<img className="avatar" src="https://www.gravatar.com/avatar/dff670794f5a697d3481f1e41be312b9?s=46" />
			</a>
		</div>
	)
}

export default Author;

Author.propTypes = {
	"by": React.PropTypes.object
}


