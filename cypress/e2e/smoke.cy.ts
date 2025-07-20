describe("ClientFlow smoke", () => {
  it("Home -> Login", () => {
    cy.visit("/");
    cy.findByText("Start Onboarding").click();
    cy.url().should("include", "/login");
  });

  it("Login -> Onboarding (mock email)", () => {
    cy.visit("/login");
    cy.get('input[type="email"]').type("qa@clientflow.io");
    cy.findByRole("button", { name: /start onboarding/i }).click();
    cy.url().should("include", "/onboarding");
    cy.contains(/User Info|Your Name/i).should("be.visible");
  });

  it("Onboarding rápido hasta Done y Dashboard", () => {
    cy.visit("/login");
    cy.get('input[type="email"]').type("qa@clientflow.io");
    cy.findByRole("button", { name: /start onboarding/i }).click();

    cy.get('input[name="name"]').type("QA");
    cy.get('input[name="company"]').type("ClientFlow Inc");
    cy.get('textarea[name="goals"]').type(
      "Probar el wizard de forma automática."
    );
    cy.findByRole("button", { name: /continue/i }).click();

    cy.get('select[name="communication"]').select("email");
    cy.get('input[name="availability"]').type("Mon–Fri 10–18 CET");
    cy.get('input[name="tools"]').type("Figma, Notion");
    cy.findByRole("button", { name: /continue/i }).click();

    cy.findByRole("button", { name: /continue/i }).click();

    cy.findByRole("button", { name: /submit/i }).click();

    cy.contains(/Thank you!/i).should("be.visible");
    cy.findByRole("link", { name: /go to dashboard/i }).click();
    cy.url().should("include", "/dashboard");
    cy.contains(/Welcome back/i).should("be.visible");
  });
});
