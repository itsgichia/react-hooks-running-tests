import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";

import Header from "../components/Header";

test("displays the text 'hello from the Header!'", () => {
  render(<Header />);
  waitFor(() => {
    expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();
  });
});
