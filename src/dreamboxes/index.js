import * as actions from "./actions";
import * as selectors from "./selectors";
import reducer from "./reducer";

import Dreambox from "./components/Dreambox";
import ListDreamboxes from "./views/ListDreamboxes";
import DisplayDreambox from "./views/DisplayDreambox";

export default {
	reducer,
	actions,
	selectors
}

export {
	Dreambox,
	ListDreamboxes,
	DisplayDreambox
}