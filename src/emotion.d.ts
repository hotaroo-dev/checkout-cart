import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: {
        red: string
        yellow: string
        blue: string
      }
      secondary: {
        orange: string
        green: string
        purple: string
      }
      grayscale: {
        lightGray: string
        darkGray: string
      }
    }
  }
}
