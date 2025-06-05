export default new class MakeOrder {
    searchInputSelector = () => cy.get('input[class="query"]');
    searchButton = () => cy.get('a[class="button search"]');
    storeItem = () => cy.get('div[class="items"]');
    itemNotFoundMessage = () => cy.get('div[class="NothingFoundView v1a v1 bs-view NothingFoundSearch"]')
    getInCartButton = () => this.storeItem().find('a').eq(3)
    openCartInDialogue = () => cy.get('a[class="button goToCart dialogClose"')    

    searchForAnItem(zbozi: string) {
        this.searchInputSelector().click().type(zbozi)
        this.searchButton().click()
    }

    placeOrderAndContinue(zbozi: string) {
        this.searchInputSelector().click().type(zbozi)
        this.searchButton().click()
        this.getInCartButton().click()
        this.openCartInDialogue().click()
    }

    
    }


