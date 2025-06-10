import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonLink from "./ButtonLink";

describe("ButtonLink component", () => {
  it("snapshot", () => {
    const { container } = render(
      <ButtonLink link="/test" title="Desktop Link" showIn="desktop" />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders correctly with mobile props", () => {
    render(<ButtonLink link="/test" title="Click me" showIn="mobile" />);

    const link = screen.getByRole("link", { name: /click me/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass("block");
    expect(link).toHaveClass("md:hidden");
  });

  it("renders correctly with desktop props", () => {
    render(<ButtonLink link="/test" title="Desktop Link" showIn="desktop" />);

    const link = screen.getByRole("link", { name: /desktop link/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass("hidden");
    expect(link).toHaveClass("md:flex");
  });

  it("renders the right arrow icon", () => {
    render(<ButtonLink link="/test" title="Icon test" showIn="both" />);

    const img = screen.getByAltText("Arrow");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/assets/icons/right-arrow.png");
  });
});
