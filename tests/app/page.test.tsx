import { expect } from "@jest/globals";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("should render learn react link", async () => {
    // Arrange
    render(<HomePage />);
    // Act
    const linkElement = screen.findByText(/learn react/i);
    // Assert
    expect(linkElement).toBeInTheDocument();
  });
});
