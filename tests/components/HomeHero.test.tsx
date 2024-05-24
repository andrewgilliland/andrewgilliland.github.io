import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeHero from "@/components/pages/home/HomeHero";

describe("HomeHero", () => {
  const renderComponent = () => {
    // Arrange
    render(<HomeHero />);

    return {
      heading: screen.getByText(/howdy/i),
      description: screen.getByText(/i am/i),
      button: screen.getByRole("button"),
    };
  };

  it("should render the heading, description, and button", () => {
    // Act
    const { heading, description, button } = renderComponent();

    // Assert
    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
