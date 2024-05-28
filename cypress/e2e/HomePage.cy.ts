describe("HomePage", () => {
  const renderComponent = () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").should("contain.text", "Andrew");
  };

  it("should navigate to notes page when clicking read more button", () => {
    renderComponent();

    cy.get('[data-test-id="primary-button"]').click();
    cy.url().should("include", "/notes");
  });
});
