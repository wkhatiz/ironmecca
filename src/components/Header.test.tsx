import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";

describe("<Header />", () => {
  describe("when menu button is clicked", () => {
    it("should add/remove the translate-y position tailwindcss class", () => {
      render(<Header />);
      const navElement = screen.getByRole("navigation");
      expect(navElement).toHaveClass("translate-y-[-300px]");
      const textElement = screen.getByText("Menu");
      expect(textElement).toBeVisible();
      fireEvent.click(textElement);
      expect(navElement).not.toHaveClass("translate-y-[-300px]");
      fireEvent.click(textElement);
      expect(navElement).toHaveClass("translate-y-[-300px]");
    });
  });
});
