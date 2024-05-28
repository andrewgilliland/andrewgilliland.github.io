describe("HomePage", () => {
  const renderComponent = () => {
    cy.visit("/");
    cy.get("h1").should("contain.text", "Andrew");
  };

  it("should navigate to notes page when clicking read more button", () => {
    renderComponent();

    cy.get('[data-cy="primary-button"]').click();
    cy.url().should("include", "/notes");
  });
});
