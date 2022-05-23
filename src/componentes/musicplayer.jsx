import React from 'react'
import styled from '@emotion/styled'
import IconoMusic from '../imagenes/music.svg'


const BtnMusic = styled.button`
  height: 80px;
  width: 80px;
  font-size: 25px;
  font-weight: bold;
  color: #091326;
  text-align: center;
  cursor: pointer;
  font-size:24px;
  margin-top:20px;
  margin-left:30px;
  outline: none;
  background: radial-gradient(circle, rgba(255,253,0,1) 0%, rgba(204,182,0,1) 100%);
  border: none;
  border-radius:5px;
  box-shadow: 0 9px #CCA700;

  &:hover{
    background-color: rgba(2,73,89,1) 35%;
  }

  &:active {
    background-color: rgba(2,73,89,1) 35%;
    box-shadow: 0 5px #CCA700;
    transform: translateY(4px);
  }
`

const Icono = styled.img`
  width: auto;
  height: 50px;
  padding:10px;
`


const MusicPlayer = () => {
  return (
    <BtnMusic onClick={() => {
      const track = document.getElementById('track')
      if (track.paused) {
        track.play()
      } else {
        track.pause()
      }
    }}
    >
      <Icono src={IconoMusic} />
    </BtnMusic>
  )
}

export default MusicPlayer
