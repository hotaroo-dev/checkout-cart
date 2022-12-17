import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { ICard } from '../colors'

const Nav = styled.nav`
  display: flex;
  padding: 1.25rem;
`

const Items = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`

const Item = styled.li`
  font-size: 1.1rem;
  a {
    position: relative;
    color: rgba(0, 0, 0, 0.74);
    text-decoration: none;
    transition: 0.2s;
  }
  a:hover {
    color: #121212;
  }
`

const Underline = styled(motion.span)`
  width: 100%;
  height: 4px;
  background-color: #38b2ac;
  border-radius: 10rem;
  position: absolute;
  margin-inline: 0;
  right: 0;
  left: 0;
  bottom: -8px;
`

const Cart = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: #38b2ac;
  border-radius: 50%;
  box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.6), 0 1px 2px hsla(0, 0%, 0%, 0.2);
  position: fixed;
  right: 20px;

  &:active {
    box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.4);
    transform: translateY(1px);
  }

  svg {
    fill: #fff;
  }
`

const Circle = styled.span`
  font-size: 70%;
  font-weight: 400;
  color: #fff;
  width: 1.2rem;
  height: 1.2rem;
  background-color: #f44250;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -6px;
  bottom: -6px;
  user-select: none;
`

interface Props {
  carts: ICard[]
  toggleCart: () => void
}

const Header: React.FC<Props> = ({ carts, toggleCart }) => {
  const { pathname } = useLocation()
  const cartCount = carts.reduce((sum, { count }) => sum + (count || 0), 0)

  return (
    <Nav>
      <Items>
        <Item>
          <Link to="/">
            Home {pathname === '/' && <Underline layoutId="underline" />}
          </Link>
        </Item>

        <Item>
          <Link to="/store">
            Store {pathname === '/store' && <Underline layoutId="underline" />}
          </Link>
        </Item>

        <Item>
          <Link to="/team">
            Team {pathname === '/team' && <Underline layoutId="underline" />}
          </Link>
        </Item>
      </Items>

      <Cart onClick={toggleCart}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
          <path d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM6.15 6l2.4 5h7l2.75-5ZM5.2 4h14.75q.575 0 .875.512.3.513.025 1.038l-3.55 6.4q-.275.5-.738.775Q16.1 13 15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988-.575-.987-.05-1.962L6.6 11.6 3 4H1V2h3.25Zm3.35 7h7Z" />
        </svg>
        <Circle>{cartCount}</Circle>
      </Cart>
    </Nav>
  )
}

export default Header
