import React from "react";
import { Flex } from "react-flex";

const TitleList = ({ titles }) => {
	return (
			<div className="jobtitles">
                { titles.map (
                    (title, index) => {
                        return <a key={index} href="#">{title.name}</a>;
                    }
                )}
			</div>
	)
}

export default TitleList;


TitleList.propTypes = {
	"titles": React.PropTypes.array
}