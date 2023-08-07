describe("Login page", () => {
  it("should render login page", () => {
    cy.visit("https://vr-challenger.vercel.app/");

    cy.get(".form");
  });

  it("should sign in", () => {
    cy.visit("https://vr-challenger.vercel.app/");

    cy.get("[name='username']").type("atuny0");
    cy.get("[name='password']").type("9uQFF1Lh");
    cy.get("button[type='submit']").click();
  });
});
