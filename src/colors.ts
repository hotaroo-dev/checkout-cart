type IColor =
  | {
      type: 'primary'
      color: 'red' | 'yellow' | 'blue'
    }
  | {
      type: 'secondary'
      color: 'orange' | 'green' | 'purple'
    }
  | {
      type: 'grayscale'
      color: 'light Gray' | 'dark Gray'
    }

export interface ICard {
  id: number
  type: IColor['type']
  color: IColor['color']
  price: number
  count: number
}

export const colors: ICard[] = [
  { id: 1, type: 'primary', color: 'red', price: 16, count: 0 },
  { id: 2, type: 'primary', color: 'yellow', price: 21, count: 0 },
  { id: 3, type: 'primary', color: 'blue', price: 12, count: 0 },
  { id: 4, type: 'secondary', color: 'orange', price: 18, count: 0 },
  { id: 5, type: 'secondary', color: 'green', price: 16, count: 0 },
  { id: 6, type: 'secondary', color: 'purple', price: 21, count: 0 },
  { id: 7, type: 'grayscale', color: 'light Gray', price: 12, count: 0 },
  { id: 8, type: 'grayscale', color: 'dark Gray', price: 16, count: 0 }
]
