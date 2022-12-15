import React, { useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import Header from '../components/header'
import Carts from '../components/carts'
import { ICard } from '../colors'

interface IContext {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
  setCarts: React.Dispatch<React.SetStateAction<ICard[]>>
}

export const useCustomContext = () => useOutletContext<IContext>()

const Root: React.FC = () => {
  const [carts, setCarts] = useState<ICard[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [count, setCount] = useState(0)

  return (
    <>
      <Header count={count} setCartOpen={setCartOpen} />
      <Carts
        carts={carts}
        count={count}
        cartOpen={cartOpen}
        setCarts={setCarts}
        setCount={setCount}
      />
      <Outlet context={{ count, setCount, setCarts }} />
    </>
  )
}

export default Root
