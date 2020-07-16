import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import Header from "./components/Header";
import * as serviceWorker from "./serviceWorker";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { ApolloProvider } from '@apollo/react-hooks'
import client from './apolloClientConfig'

Amplify.configure(awsExports);

const links = [
  { text: "Login", order: 1 },
  { text: "About me", order: 2 },
  { text: "Contact me", order: 3 },
];

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Header logo="something.png" />
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
