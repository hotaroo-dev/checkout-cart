import { ICard } from './colors'

export const checkLocalStorage = () => {
  const carts = localStorage.getItem('carts')
  if (carts !== null) {
    return JSON.parse(carts)
  }

  return []
}

const getIndex = (carts: ICard[], cart: ICard) =>
  carts.findIndex(c => c.id === cart.id)

export const saveLocalCart = (cart: ICard) => {
  let carts = checkLocalStorage() as ICard[]
  const cartIndex = getIndex(carts, cart)
  cartIndex !== -1
    ? (carts = carts.map((cart, i) =>
        i == cartIndex ? { ...cart, count: cart.count + 1 } : cart
      ))
    : carts.push(cart)

  localStorage.setItem('carts', JSON.stringify(carts))
}

export const removeLocalCart = (cart: ICard) => {
  let carts = checkLocalStorage() as ICard[]
  carts = carts.filter(c => c.id !== cart.id)

  localStorage.setItem('carts', JSON.stringify(carts))
}
