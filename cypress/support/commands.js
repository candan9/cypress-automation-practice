// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })import RegisterPage from "../PageObject/RegisterPage";
import RegisterPage from "../PageObject/RegisterPage";
const register = new RegisterPage();
Cypress.Commands.add("register", () => {
  register.selectGender();
  register.enterFirstName();
  register.enterSurname();
  register.enterPassword();
  register.selectDay();
  register.selectMonth();
  register.selectYear();
  register.enterAdressFirstName();
  register.enterAdressSurname();
  register.enterAdressCompany();
  register.enterAdress();
  register.enterAdressLine();
  register.enterCity();
  register.selectState();
  register.enterPostCode();
  register.enterInfo();
  register.enterPhone();
  register.enterMobilPhone();
  register.submit();
});
Cypress.Commands.add("assertStatusCode", (endpoint) => {
  cy.request({
      url: Cypress.config().apiBaseUrl + endpoint,

    }).then((response) => {
      expect(response.status).to.eq(200);
    });
});