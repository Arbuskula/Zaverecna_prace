export default new class ItemInCart {
    findItemInCart = () => cy.get('div[class="BasketMasterView v1a v1 bs-view dcon dc205 BasketMaster"]').find('[class="name"]') 
    removeItemFromCartButton = () => cy.get('div[class="BasketTableRwdView v1a v1 bs-view dcon dc206 BasketTableRwd"]').find('a[class="button remove"]')
    emptyCart = () => cy.get('div[class="EmptyBasketView v1a v1 bs-view dcon dc237 EmptyBasket"]')

    validateItemInCart(itemText) {
        this.findItemInCart().should('contain.text', itemText)
    }

    removeItemFromCart() {
        this.removeItemFromCartButton().click()
    }
}