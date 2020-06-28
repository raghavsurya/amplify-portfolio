import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import Header from "./components/Header";
import * as serviceWorker from "./serviceWorker";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import ApolloClient from "apollo-boost";

const client = new ApolloClient();

Amplify.configure(awsExports);

const links = [
  { text: "Login", order: 1 },
  { text: "About me", order: 2 },
  { text: "Contact me", order: 3 },
];

ReactDOM.render(
  <React.StrictMode>
    <Header links={links} logo="something.png" />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
