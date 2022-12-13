interface Theme {
  color: {
    primary: {
      [index: string]: string
      red: string
      yellow: string
      blue: string
    }
    secondary: {
      [index: string]: string
      orange: string
      green: string
      purple: string
    }
    grayscale: {
      [index: string]: string
      lightGray: string
      darkGray: string
    }
  }
}

export const theme: Theme = {
  color: {
    primary: {
      red: '#e60000',
      yellow: '#ffea00',
      blue: '#0015ff'
    },
    secondary: {
      orange: '#ff6500',
      green: '#00cc66',
      purple: '#805AD5'
    },
    grayscale: {
      lightGray: '#d0d0d0',
      darkGray: '#505050'
    }
  }
}
