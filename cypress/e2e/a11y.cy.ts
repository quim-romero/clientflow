describe("Accessibility (Axe)", () => {
  it("The home page has no 'serious' or 'critical' violations", () => {
    cy.visit("/");

    cy.injectAxe();

    cy.checkA11y(
      undefined,
      {
        includedImpacts: ["critical", "serious"],
      },
      (violations) => {
        violations.forEach((v) => {
          Cypress.log({
            name: "a11y",
            message: `${v.id} (${v.impact}) – ${v.help}`,
            consoleProps: () => v,
          });
        });
      }
    );
  });
});
