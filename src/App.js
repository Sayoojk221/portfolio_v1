import React from "react";
import { Provider } from "react-redux";

import Portfolio from 'layouts'
import store from "store/store";

function App() {
  return (
    <Provider store={store}>
      <Portfolio />
    </Provider>
  );
}

export default App;
