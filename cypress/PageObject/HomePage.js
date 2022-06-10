class HomePage {
  elements = {
    signInBtn: () => cy.get(".login"),
    url: () => cy.url(),
    searchInput: () => cy.get("#search_query_top"),
    searchBtn: () => cy.get(".button-search"),
    cartBtn: () => cy.get(".shopping_cart"),
    checkoutSection: () => cy.get("#button_order_cart"),
    continueBtn: () => cy.get(".continue"),
    accountBtn: () => cy.get(".account"),
    ordersBtn: () => cy.get(".icon-list-ol"),
    categorySection: () => cy.get(".sf-with-ul").last(),
    subCategorySection: () => cy.get(".submenu-container>li>a").last(),
    orderHistorySection: () => cy.get(".history_link"),
  };
  goToSignIn() {
    this.elements.signInBtn().click();
  }
  assertUrl() {
    this.elements.url().should("eq", "http://automationpractice.com/index.php");
  }
  searchTerm(term) {
    this.elements.searchInput().type(term);
    this.elements.searchBtn().click();
  }
  selectCategory() {
    this.elements.categorySection().rightclick().wait(500);
    this.elements.subCategorySection().click();
  }
  goToCart() {
    this.elements.cartBtn().trigger("mouseover");
    this.elements.checkoutSection().click();
  }
  continueShopping() {
    this.elements.continueBtn().click();
  }
  goToAccount() {
    this.elements.accountBtn().click();
  }
  goToOrders() {
    this.elements.ordersBtn().click();
  }
  checkOrderCreated() {
    this.elements.orderHistorySection().should("be.visible");
  }
}
export default HomePage;
