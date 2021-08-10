import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/Store/Store";
import Loading from "./components/Loading/Loading";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
