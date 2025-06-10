import React from "react";
import { render, screen } from "@testing-library/react";
import SideDescription from "./SideDescription";
import type { DescriptionInfo } from "@/app/lib/definitions";

describe("SideDescription", () => {
  const mockData: DescriptionInfo = {
    headline: "WELCOME",
    title: "<strong>Hello</strong> World",
    description: "This is a description text.",
  };

  it("snapshot", () => {
    const { container } = render(<SideDescription data={mockData} />);
    expect(container).toMatchSnapshot();
  });

  it("renders headline", () => {
    render(<SideDescription data={mockData} />);
    expect(screen.getByText("WELCOME")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<SideDescription data={mockData} />);
    expect(screen.getByText("This is a description text.")).toBeInTheDocument();
  });

  it("does not render elements if missing in data", () => {
    render(
      <SideDescription data={{ headline: "", title: "", description: "" }} />
    );
    expect(screen.queryByRole("heading", { level: 1 })).toBeNull();
    expect(screen.queryByText(/.+/)).toBeNull();
  });
});
