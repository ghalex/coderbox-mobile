import React from "react";
import md5 from "md5";

const Author = ({ by }) => {

	let hash = md5(by.email || "");
	let imgSrc="https://www.gravatar.com/avatar/" + hash + "?s=46";

	return (
		<div className="author">
			<a href={by.url} target="_blank">
				<img className="avatar" src={imgSrc} />
			</a>
		</div>
	)
}

export default Author;

Author.propTypes = {
	"by": React.PropTypes.object
}


