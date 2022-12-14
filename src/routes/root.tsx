import React, { useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import Header from '../components/header'

type ContextType = { setCount: React.Dispatch<React.SetStateAction<number>> }

export const useSetCount = () => useOutletContext<ContextType>()

const Root: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header count={count} />
      <Outlet context={{ setCount }} />
    </>
  )
}

export default Root
