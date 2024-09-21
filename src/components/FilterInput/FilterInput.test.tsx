import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import axios from "axios";

import { FilterInput } from "./index";

jest.mock("axios");

describe("FilterInput Component", () => {
  beforeAll(() => {
    const root = document.createElement("div");
    root.setAttribute("id", "root");
    document.body.appendChild(root);
  });

  afterAll(() => {
    // eslint-disable-next-line testing-library/no-node-access
    const root = document.getElementById("root");
    if (root) {
      document.body.removeChild(root);
    }
  });

  it("should render the input and button", () => {
    render(<FilterInput />);

    const inputElement = screen.getByPlaceholderText(/Type the name/i);
    const buttonElement = screen.getByText(/Fetch Users/i);

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("should display an error if fetch fails", async () => {
    (axios.get as jest.Mock).mockRejectedValue(new Error("Failed to fetch"));

    render(<FilterInput />);

    const buttonElement = screen.getByText(/Fetch Users/i);
    fireEvent.click(buttonElement);

    const errorElement = await screen.findByText(/Failed to fetch users/i);
    expect(errorElement).toBeInTheDocument();
  });
});
