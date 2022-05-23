import React from 'react'
import styled from '@emotion/styled'
import CH from '../imagenes/pacmanmove.gif'

const Player = styled.img`
  margin-top:3px;
  height:30px;
  with:auto;
  transition:transform 250ms;
  }
`

const Character = () => {
  return (
    <Player src={CH} />
  )
}

export default Character
