import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BannerImage from "./BannerImage";
import BannerText from "./BannerText";

describe("<BannerText/>", () => {
  it("renders the banner text as heading", () => {
    render(<BannerText />);
    let textElement = screen.getByRole("heading");
    expect(textElement).toBeVisible();
  });

  it("renders the correct text", () => {
    render(<BannerText />);
    let textElement = screen.getByRole("heading");
    expect(textElement).toHaveTextContent(
      "Mecca Summer Sale. Book A Class Today"
    );
  });

  it("renders the button", () => {
    render(<BannerText />);
    let buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeVisible();
  });

  it("renders the correct text in the button", () => {
    render(<BannerText />);
    let buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("Book A Class");
  });

  /*

    TBD on click tests

    it("renders the correct text in the button", () => {
        render(<BannerText />);
        let buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement);
        // assert below
    });

  */
});
