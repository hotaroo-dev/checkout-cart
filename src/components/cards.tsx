import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { colors, ICard } from '../colors'
import { theme } from '../theme'
import { useCustomContext } from '../routes/root'
import { saveLocalCart } from '../localStorage'

const Container = styled(motion.main)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  padding: 2.2rem 4rem;
`

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.65rem;

  & > p {
    font-weight: 400;
  }

  p {
    font-size: 70%;
    color: #818181;
    text-transform: uppercase;
  }
`

export const Color = styled.div<{ bgColor: string }>`
  width: 100%;
  aspect-ratio: 7 / 5;
  background-color: ${props => props.bgColor};
  border-radius: 5px;
`

const Overview = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
`

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h4,
  p {
    font-weight: 500;
  }
  p {
    font-size: 84%;
  }
`

const Add = styled.button`
  font-size: 1rem;
  padding: 0.6rem 0.8rem;
  color: #e5e5e5;
  border: none;
  background-color: #38b2ac;
  border-radius: 5px;
  box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2);

  &:active {
    box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.4);
    transform: translateY(1px);
  }
`

const containerVariants = {
  hidden: { y: 10, opacity: 0.65 },
  visible: { y: 0, opacity: 1, transition: { staggerChildren: 0.1 } },
  exit: { y: -10, opacity: 0.65 }
}

const cardVariants = {
  hidden: {
    y: 10,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: -10,
    opacity: 0
  }
}

const Cards: React.FC = () => {
  const { count, setCount, setCarts } = useCustomContext()

  const addToCart = (card: ICard) => {
    setCarts(carts => {
      const cardIndex = carts.findIndex(cart => cart.id === card.id)
      if (cardIndex !== -1) {
        return carts.map((cart, i) =>
          i === cardIndex ? { ...cart, count: cart.count + 1 } : cart
        )
      }

      return [...carts, { ...card, count: 1 }]
    })

    setCount(count => count + 1)

    saveLocalCart({ ...card, count: 1 })
    localStorage.setItem('count', String(count + 1))
  }

  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ type: 'spring', stiffness: 50, duration: 1.5 }}
    >
      {colors.map(card => (
        <Card
          key={card.id}
          variants={window.innerWidth >= 640 ? cardVariants : undefined}
        >
          <Color
            bgColor={theme.color[card.type][card.color.replace(/\s/g, '')]}
          />

          <p>
            {card.type} {card.type !== 'grayscale' ? 'color' : null}
          </p>

          <Overview>
            <Info>
              <h4>{card.color[0].toUpperCase() + card.color.substring(1)}</h4>
              <p>${card.price}.00</p>
            </Info>
            <Add onClick={() => addToCart(card)}>Add to Card</Add>
          </Overview>
        </Card>
      ))}
    </Container>
  )
}

export default Cards
