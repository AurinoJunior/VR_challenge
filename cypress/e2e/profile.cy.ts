describe("Profile page", () => {
  it("should render profile page", () => {
    cy.visit("https://vr-challenger.vercel.app/");

    cy.get("[name='username']").type("atuny0");
    cy.get("[name='password']").type("9uQFF1Lh");
    cy.get("button[type='submit']").click();

    cy.get(".profile");
  });

  it("should back to login page", () => {
    cy.visit("https://vr-challenger.vercel.app/");

    cy.get("[name='username']").type("atuny0");
    cy.get("[name='password']").type("9uQFF1Lh");
    cy.get("button[type='submit']").click();

    cy.get(".profile__exit-btn > button").click();

    cy.get(".login > .form");
  });
});
