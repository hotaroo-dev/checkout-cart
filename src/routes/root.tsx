import React, { useCallback, useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import Header from '../components/header'
import Carts from '../components/carts'
import { ICard } from '../colors'
import {
  isContains,
  checkLocalStorage,
  removeLocalCart,
  saveLocalCart
} from '../localStorage'

type IContext = { addToCart: (card: ICard) => void }

export const useCustomContext = () => useOutletContext<IContext>()

const Root: React.FC = () => {
  const [carts, setCarts] = useState<ICard[]>(checkLocalStorage())
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = useCallback(
    (card: ICard) => {
      setCarts(carts =>
        isContains(carts, card)
          ? carts.map(cart =>
              cart.id === card.id
                ? { ...card, count: cart.count && cart.count + 1 }
                : cart
            )
          : [...carts, { ...card, count: 1 }]
      )

      saveLocalCart(card)
    },
    [carts]
  )

  const deleteCart = useCallback(
    (cart: ICard) => {
      setCarts(carts => carts.filter(c => c.id !== cart.id))
      removeLocalCart(cart)
    },
    [carts]
  )

  const toggleCart = () => {
    setCartOpen(cartOpen => !cartOpen)
  }

  return (
    <>
      <Header carts={carts} toggleCart={toggleCart} />
      <Carts carts={carts} cartOpen={cartOpen} deleteCart={deleteCart} />
      <Outlet context={{ addToCart }} />
    </>
  )
}

export default Root
