import { ICard } from './colors'

export const checkLocalStorage = () => {
  const carts = localStorage.getItem('carts')
  if (carts !== null) {
    return JSON.parse(carts)
  }

  return []
}

export const isContains = (carts: ICard[], cart: ICard) =>
  carts.some(c => c.id === cart.id)

export const saveLocalCart = (cart: ICard) => {
  let carts = checkLocalStorage() as ICard[]
  isContains(carts, cart)
    ? (carts = carts.map(c =>
        c.id === cart.id ? { ...c, count: c.count && c.count + 1 } : c
      ))
    : carts.push({ ...cart, count: 1 })

  localStorage.setItem('carts', JSON.stringify(carts))
}

export const removeLocalCart = (cart: ICard) => {
  let carts = checkLocalStorage() as ICard[]
  carts = carts.filter(c => c.id !== cart.id)

  localStorage.setItem('carts', JSON.stringify(carts))
}
