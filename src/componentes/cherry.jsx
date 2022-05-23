import React from 'react'
import styled from '@emotion/styled'
import coin from '../imagenes/strawberry.svg'

const Cherry = styled.img`
    height:30px;
    width:auto;
    align-items: center;
    margin-top:5px;
`

const Goal = () => {
  return (
    <Cherry src={coin} />
  )
}

export default Goal
