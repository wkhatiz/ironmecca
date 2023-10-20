import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BannerImage from "./BannerImage";

describe("BannerImage", () => {
  it("renders the banner image", () => {
    render(<BannerImage />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeVisible();
  });
  it("renders the overlaid text", () => {
    render(<BannerImage />);
    const textElement = screen.getByText("EAT SLEEP LIFT REPEAT");
    expect(textElement).toBeVisible();
  });
});
