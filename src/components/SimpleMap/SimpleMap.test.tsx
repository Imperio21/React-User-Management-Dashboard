import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SimpleMap } from "./index";

describe("SimpleMap", () => {
  const renderComponent = (lat: string, long: string) => {
    render(<SimpleMap lat={lat} long={long} />);
  };

  it("renders the map iframe with the correct src URL", () => {
    const lat = "40.7128";
    const long = "-74.0060";

    renderComponent(lat, long);

    const iframe = screen.getByTitle("map");
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute(
      "src",
      `https://www.google.com/maps?q=${lat},${long}&z=15&output=embed`
    );
  });

  it("renders the map iframe with different coordinates", () => {
    const lat = "34.0522";
    const long = "-118.2437";

    renderComponent(lat, long);

    const iframe = screen.getByTitle("map");
    expect(iframe).toHaveAttribute(
      "src",
      `https://www.google.com/maps?q=${lat},${long}&z=15&output=embed`
    );
  });

  it("handles invalid coordinates gracefully", () => {
    const lat = "invalid";
    const long = "coordinates";

    renderComponent(lat, long);

    const iframe = screen.getByTitle("map");
    expect(iframe).toHaveAttribute(
      "src",
      `https://www.google.com/maps?q=${lat},${long}&z=15&output=embed`
    );
  });
});
