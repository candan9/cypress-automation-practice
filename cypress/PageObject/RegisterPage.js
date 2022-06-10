class RegisterPage {
  elements = {
    gender: () => cy.get("#uniform-id_gender1"),
    firstNameInput: () => cy.get("#customer_firstname"),
    lastNameInput: () => cy.get("#customer_lastname"),
    passwordInput: () => cy.get("#passwd"),
    day: () => cy.get("#days"),
    month: () => cy.get("#months"),
    year: () => cy.get("#years"),
    adressFirstNameInput: () => cy.get("#firstname"),
    adressLastNameInput: () => cy.get("#lastname"),
    companyInput: () => cy.get("#company"),
    adressFirstInput: () => cy.get("#address1"),
    adressSecondInput: () => cy.get("#address2"),
    cityInputInput: () => cy.get("#city"),
    stateInput: () => cy.get("#id_state"),
    postcodeInput: () => cy.get("#postcode"),
    countryInput: () => cy.get("#id_country"),
    otherInput: () => cy.get("#other"),
    phoneInput: () => cy.get("#phone"),
    phoneMobileInput: () => cy.get("#phone_mobile"),
    submitBtn: () => cy.get("#submitAccount"),
    
  };

  selectGender() {
    this.elements.gender().click();
  }
  enterFirstName(firstName="Emre") {
    this.elements.firstNameInput().clear().type(firstName);
  }
  enterSurname(lastName="Candan") {
    this.elements.lastNameInput().clear().type(lastName);
  }
  enterPassword(password = Cypress.env("signIn").password) {
    this.elements.passwordInput().clear().type(password);
  }
  selectDay() {
    this.elements.day().select("1");
  }
  selectMonth() {
    this.elements.month().select("1");
  }
  selectYear() {
    this.elements.year().select("2002");
  }
  enterAdressFirstName(firstName="Emre") {
    this.elements.adressFirstNameInput().clear().type(firstName);
  }
  enterAdressSurname(surName="Candan") {
    this.elements.adressLastNameInput().clear().type(surName);
  }
  enterAdressCompany() {
    this.elements.companyInput().clear().type("deneme");
  }
  enterAdress() {
    this.elements.adressFirstInput().clear().type("adress");
  }
  enterAdressLine() {
    this.elements.adressSecondInput().clear().type("adress2");
  }
  enterCity() {
    this.elements.cityInputInput().clear().type("samsun");
  }
  selectState() {
    this.elements.stateInput().select("1");
  }
  enterPostCode() {
    this.elements.postcodeInput().clear().type("34333");
  }
  selectCountry() {
    this.elements.countryInput().select("21");
  }
  enterInfo() {
    this.elements.otherInput().clear().type("desc");
  }
  enterPhone() {
    this.elements.phoneInput().clear().type("5060643018");
  }
  enterMobilPhone() {
    this.elements.phoneMobileInput().clear().type("5060643018");
  }
  submit() {
    this.elements.submitBtn().click();
  }
}
export default RegisterPage;
