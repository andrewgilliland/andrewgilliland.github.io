describe("NotesPage", () => {
  const renderComponent = () => {
    cy.visit("/");
    cy.get("h1").should("contain.text", "Andrew");
  };

  it("should navigate to notes page when clicking read more button", () => {
    renderComponent();

    cy.get('[data-cy="primary-button"]').click();
    cy.url().should("include", "/notes");
  });

  it("should render Glossary of Terms page when clicking on NoteCard", () => {
    renderComponent();

    cy.get('[data-cy="primary-button"]').click();
    cy.url().should("include", "/notes");

    cy.get('[data-cy="note-card-glossary-of-terms"]').first().click();
    cy.url().should("include", "/notes/glossary-of-terms");
  });
});
