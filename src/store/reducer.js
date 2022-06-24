import { combineReducers } from "redux";

import uireducer from "store/ui";

export default combineReducers({
  ui: uireducer,
});
