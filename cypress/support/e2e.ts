import "@testing-library/cypress/add-commands";
import "cypress-axe";

Cypress.on("uncaught:exception", () => false);
