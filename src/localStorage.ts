import { ICard } from './colors'

export const checkLocalStorage = () => {
  const carts = localStorage.getItem('carts')
  if (carts !== null) {
    return JSON.parse(carts)
  }

  return []
}

export const saveLocalCart = (cart: ICard) => {
  let carts = checkLocalStorage() as ICard[]
  const isContains = carts.some(c => c.id === cart.id)
  isContains
    ? (carts = carts.map(c =>
        c.id === cart.id ? { ...c, count: c.count + 1 } : c
      ))
    : carts.push(cart)

  localStorage.setItem('carts', JSON.stringify(carts))
}

export const removeLocalCart = (cart: ICard) => {
  let carts = checkLocalStorage() as ICard[]
  carts = carts.filter(c => c.id !== cart.id)

  localStorage.setItem('carts', JSON.stringify(carts))
}
