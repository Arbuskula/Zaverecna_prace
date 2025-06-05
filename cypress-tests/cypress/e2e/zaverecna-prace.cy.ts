import MakeOrder from '../pages/storePage'
import LoginProcess from  '../pages/loginComponent'
import ItemInCart from '../pages/cartPage'

describe('searching for items and adding to cart works correctly', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('div[id="CookiesConfirmation"]').find('a[class="allowLink"]').click()
  })
  it('should search for a right item', () => {
    MakeOrder.searchForAnItem("10281")
    MakeOrder.storeItem().should('contain.text', "10281")
  })
  it('should display correct message when item not found', () => {
    MakeOrder.searchForAnItem("99999")
    MakeOrder.itemNotFoundMessage().should('contain.text', "Nebyly nalezeny žádné produkty")
  })
  it('should put item in cart successfuly', () => {
    MakeOrder.placeOrderAndContinue("10281")
    ItemInCart.validateItemInCart("Bonsaj")

  })
  it('should remove item from cart', () => {
    MakeOrder.placeOrderAndContinue("10281")
    ItemInCart.validateItemInCart("Bonsaj")
    ItemInCart.removeItemFromCart()
    ItemInCart.emptyCart().should('contain.text', "Váš nákupní košík je prázdný")
  })
  it('should add item to cart and validate, login and validate again', () => {
    MakeOrder.placeOrderAndContinue("lego botanical")
    ItemInCart.validateItemInCart("Kytice")
    LoginProcess.login()
    ItemInCart.validateItemInCart("Kytice")   
  })


})