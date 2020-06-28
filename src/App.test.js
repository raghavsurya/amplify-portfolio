import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

it("renders learn react link", () => {
  const { container } = render(<App />);
  //const linkElement = getByText(/learn react/i);
  console.log(container);
  expect(container).toHaveTextContent("Learn React");
});
