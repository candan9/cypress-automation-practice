class ProductsPage {
  elements = {
    productSection: () => cy.get(".product-container").first(),
    addProductBtn: () => cy.get(".ajax_add_to_cart_button").first(),
    contain: (term) =>cy.contains(term),
    checkoutBtn: () => cy.get(".standard-checkout"),
    aggreTermsCheckbox : () => cy.get("#cgv"),
    paymentMethod: () => cy.get(".bankwire"),
    quantity : () => cy.get("#summary_products_quantity"),
  };
  addToCart() {
    this.elements.productSection().trigger('mouseover');
    return this.elements.addProductBtn().click();
  }
  checkout(term="Proceed to checkout") {
    cy.wait(1000)
    this.elements.contain(term).click({force: true});
  }
  checkoutOrdering() {
    this.elements.checkoutBtn().click();
  }
  agreeTerms(){
   this.elements.aggreTermsCheckbox().click()
  }
  paymentMethod(){
    this.elements.addProductBtn().click()
  }
  assertQuantity(){
    this.elements.quantity().contains("2")
  }
  
}
export default ProductsPage;
