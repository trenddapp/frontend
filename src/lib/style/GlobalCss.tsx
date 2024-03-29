'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
  }
  body {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.background};
  }
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #4e5ee4;
    border-radius: 8px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #4b52e3;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
  [data-nextjs-scroll-focus-boundary] {
    display: contents;
  }
`

export default GlobalStyle
