import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeHero from "@/components/pages/home/HomeHero";

describe("HomeHero", () => {
  it("renders the HomeHero component", () => {
    render(<HomeHero />);
  });
});
