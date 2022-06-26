import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Loading from "./Components/Loading/Loading";

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);
/* const root = createRoot(document.getElementById("root"));
root.render(<App />); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
