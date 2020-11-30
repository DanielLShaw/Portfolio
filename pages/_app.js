import React from "react";
import { Provider } from "react-redux";
import { makeStore } from "../store";

import "../assets/sass/main.scss";

const App = ({ Component, pageProps }) => {
  const store = makeStore();
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
