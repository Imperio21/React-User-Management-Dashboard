import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Grid } from "./index";
import { User } from "./types";

const mockUsers: User[] = [
  {
    id: 1,
    name: "Alice Johnson",
    username: "alicej",
    email: "alice@example.com",
    address: {
      street: "123 Apple St",
      suite: "Apt 1",
      city: "Ville",
      geo: { lat: "1", lng: "1" },
    },
    phone: "555-0001",
    website: "alicej.com",
    company: { name: "Apple Co", catchPhrase: "Fruitful Innovations" },
  },
  {
    id: 2,
    name: "Bob Smith",
    username: "bobsmith",
    email: "bob@example.com",
    address: {
      street: "456 Banana Ave",
      suite: "Apt 2",
      city: "Fruitville",
      geo: { lat: "2", lng: "2" },
    },
    phone: "555-0002",
    website: "bobsmith.com",
    company: { name: "Banana Inc", catchPhrase: "Going Bananas" },
  },
];

describe("Grid component", () => {
  it("renders user information correctly", () => {
    const onUserClick = jest.fn();
    render(<Grid users={mockUsers} onUserClick={onUserClick} />);

    expect(screen.getByText("User Information")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Phone")).toBeInTheDocument();
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("City")).toBeInTheDocument();
    expect(screen.getByText("Company")).toBeInTheDocument();

    expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
    expect(screen.getByText("555-0001")).toBeInTheDocument();
    expect(screen.getByText("alicej")).toBeInTheDocument();
    expect(screen.getByText("Ville")).toBeInTheDocument();
    expect(screen.getByText("Apple Co")).toBeInTheDocument();

    expect(screen.getByText("Bob Smith")).toBeInTheDocument();
    expect(screen.getByText("555-0002")).toBeInTheDocument();
    expect(screen.getByText("bobsmith")).toBeInTheDocument();
    expect(screen.getByText("Fruitville")).toBeInTheDocument();
    expect(screen.getByText("Banana Inc")).toBeInTheDocument();
  });

  it("calls onUserClick when a user is clicked", () => {
    const onUserClick = jest.fn();
    render(<Grid users={mockUsers} onUserClick={onUserClick} />);

    fireEvent.click(screen.getByText("Alice Johnson"));
    expect(onUserClick).toHaveBeenCalledWith(mockUsers[0]);
  });

  it("navigates to the next page", () => {
    const onUserClick = jest.fn();
    render(<Grid users={mockUsers} onUserClick={onUserClick} />);

    fireEvent.click(screen.getByText("Next"));
    expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
  });

  it("disables next button when on the last page", () => {
    const onUserClick = jest.fn();
    render(<Grid users={mockUsers} onUserClick={onUserClick} />);

    fireEvent.click(screen.getByText("Next"));
    expect(screen.getByRole("button", { name: /next/i })).toBeDisabled();
  });
});
