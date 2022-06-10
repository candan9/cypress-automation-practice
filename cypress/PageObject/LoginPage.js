class LoginPage {
  elements = {
    createEmailInput: () => cy.get("#email_create"),
    registerBtn: () => cy.get("#SubmitCreate"),
    loginEmailInput: () => cy.get("#email"),
    loginPasswordInput: () => cy.get("#passwd"),
    loginBtn : () => cy.get("#SubmitLogin"),
  };
  navigateToRegister(email = Cypress.env("signIn").email) {
    this.elements.createEmailInput().type(email);
    return this.elements.registerBtn().click();
  }

  login(
    email = Cypress.env("signIn").email,
    password = Cypress.env("signIn").password
  ) {
    this.elements.loginEmailInput().clear().type(email);
    this.elements.loginPasswordInput().clear().type(password);
    return this.elements.loginBtn().click();
  }
}
export default LoginPage;
