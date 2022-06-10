import LoginPage from "../PageObject/LoginPage";
import HomePage from "../PageObject/HomePage";
import ProductsPage from "../PageObject/ProductsPage";
context("Make an order", () => {
  const login = new LoginPage();
  const home = new HomePage();
  const products = new ProductsPage();
  before(() => {
    cy.visit("/");
    home.assertUrl();
  });
  it("Go login to create an account ", () => {
    home.goToSignIn();
    login.navigateToRegister();
    cy.register();
  });
  it("Assert account created ", () => {
    cy.get(".header_user_info").should("be.visible");
    home.selectCategory();
    products.addToCart();
    home.continueShopping()
    home.searchTerm("Summer")
    products.addToCart()
    products.checkout()
    products.assertQuantity()
    products.checkoutOrdering()
    login.login()
    cy.scrollTo('bottom')
    cy.get('.button-medium').last().click()
    products.agreeTerms()
    products.checkoutOrdering()
    products.paymentMethod()
    cy.get('.button-medium').last().click()
    home.goToAccount();
    home.goToOrders();
    home.checkOrderCreated()
    //
  });
});
