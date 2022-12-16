import React, { useCallback, useEffect, useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import Header from '../components/header'
import Carts from '../components/carts'
import { ICard } from '../colors'
import {
  checkLocalStorage,
  removeLocalCart,
  saveLocalCart
} from '../localStorage'

type IContext = { addToCart: (card: ICard) => void }

export const useCustomContext = () => useOutletContext<IContext>()

const Root: React.FC = () => {
  const [carts, setCarts] = useState<ICard[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = useCallback(
    (card: ICard) => {
      setCarts(carts => {
        const cardIndex = carts.findIndex(cart => cart.id === card.id)
        if (cardIndex !== -1) {
          return carts.map((cart, i) =>
            i === cardIndex ? { ...cart, count: cart.count + 1 } : cart
          )
        }

        return [...carts, { ...card, count: 1 }]
      })
      saveLocalCart({ ...card, count: 1 })
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

  useEffect(() => {
    setCarts(checkLocalStorage())
  }, [])

  return (
    <>
      <Header carts={carts} toggleCart={toggleCart} />
      <Carts carts={carts} cartOpen={cartOpen} deleteCart={deleteCart} />
      <Outlet context={{ addToCart }} />
    </>
  )
}

export default Root
