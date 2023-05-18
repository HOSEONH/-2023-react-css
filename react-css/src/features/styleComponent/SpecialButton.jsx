import React from 'react'
import CommonButton from './CommonButton'

import { styled } from 'styled-components'
const ButtonTest = styled(CommonButton)`
    ${(props)=>{
      switch (props.mode) {
        case "dark":
          return `
          background-color: #383838;
          color: white;
        `
        case "light":
          return `
            background-color: white;
            color: #383838;
            border: solid 1px #383838;
          `
      }
    }}
`

export default function SpecialButton({children, ...rest}) {
  return (
    <ButtonTest {...rest}>{children}</ButtonTest>
  )
}
