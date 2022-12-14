import React, { useState } from 'react'
import styled from '@emotion/styled'
import { colors, ICard } from '../colors'
import { theme } from '../theme'
import { useSetCount } from '../routes/root'

const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2.2rem 4rem;
`

const Card = styled.div`
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

const Color = styled.div<{ bgColor: string }>`
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

const Info = styled.div`
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

const Cards: React.FC = () => {
  const [cart, setCart] = useState<ICard[]>([])
  const { setCount } = useSetCount()

  const cartIncrement = () => setCount(count => count + 1)

  const addCart = () => {
    cartIncrement()
  }

  return (
    <Container>
      {colors.map(card => (
        <Card key={card.id}>
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
            <Add onClick={addCart}>Add to Card</Add>
          </Overview>
        </Card>
      ))}
    </Container>
  )
}

export default Cards
