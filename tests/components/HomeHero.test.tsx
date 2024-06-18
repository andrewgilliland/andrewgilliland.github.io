import { render, screen } from "@testing-library/react";
import HomeHero from "@/components/pages/home/HomeHero";
import { expect } from "@jest/globals";

describe("HomeHero", () => {
  const renderComponent = () => {
    // Arrange
    render(<HomeHero />);

    return {
      heading: screen.getByText(/howdy/i),
      description: screen.getByText(/i am/i),
      button: screen.getByRole("button", { name: /read more/i }),
    };
  };

  it("should render the heading, description, and button", () => {
    // Act
    const { heading, description, button } = renderComponent();

    // Assert
    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(button.textContent).toBe("Read More");
  });
});
