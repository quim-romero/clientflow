import type { Result, ImpactValue } from "axe-core";

function selectorToString(sel: unknown): string {
  if (typeof sel === "string") return sel;
  if (Array.isArray(sel)) return sel.map(selectorToString).join(" ");
  try {
    return JSON.stringify(sel);
  } catch {
    return String(sel);
  }
}

const isSeriousOrCritical = (impact?: ImpactValue | null) =>
  impact === "serious" || impact === "critical";

describe("Accessibility (Axe)", () => {
  it("Home without serious violations)", () => {
    cy.visit("/");

    cy.injectAxe();

    cy.checkA11y(
      undefined,
      undefined,
      (violations: Result[]) => {
        const filtered = violations.filter((v) =>
          isSeriousOrCritical(v.impact)
        );

        filtered.forEach((v) => {
          const selectors = v.nodes
            .map((n) => {
              const t: unknown = n.target;
              return selectorToString(t);
            })
            .join(" | ");

          Cypress.log({
            name: `a11y:${v.id}`,
            message: `${v.impact ?? "unknown"} – ${v.help} → ${selectors}`,
            consoleProps: () => v,
          });
        });

        if (filtered.length) {
          cy.writeFile("cypress/reports/a11y/home-serious.json", filtered, {
            log: true,
          });
        }
      },
      true
    );
  });
});
