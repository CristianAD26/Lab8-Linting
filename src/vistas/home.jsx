import React from 'react'
import styled from '@emotion/styled'
import Pacman from '../imagenes/pacman.png'
import Game from './tablero.jsx'
import Music from '../audios/musichome.mp3'
import RandomIcon from '../imagenes/randomize.png'
import BtnMusic from '../componentes/musicplayer.jsx'
import bg from '../imagenes/background.png'

const Main = styled.main`
  display: flex;
  background-image:url(${bg});
  image-repeat:repeat;
  image-size:auto;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

const Texto1 = styled.h1`
  margin:0;
  color:#fff;
  font-size:40px;
  font-weight:bold;
  font-family:VT323 serif;
  justify-content: center;
`

const Texto2 = styled.p`
  color:#fff;
  font-size:20px;
  font-family:VT323 serif;
  justify-content: center;
`

const InputSection = styled.section`
  display:flex;
  flex-direction: column;
  margin-left:50px;
  justify-content: center;
  align-items:center;
`

const InputFieldsSection = styled.section`
  display:flex;
  justify-content: center;
  align-items:center;
`

const InputField = styled.input`
  width: 100px;
  height: 40px;
  display: flex;
  border: 5px solid #1D64F2;
  border-radius: 2px;
  background-color: #091326;
  font-size:20px;
  padding:0px 10px;
  margin:10px;
  color:#fff;
  font-weight:bold;
  text-align:center;  
  &:focus{
    background-color:#091326;
    color:#fff;
  }  
  &:in-range {
    background-color: #091326;
  }  
  &:out-of-range {
    background-color: #ee6666;
  }
`

const Imagen = styled.img`
  width: auto;
  height: 90vh;
  margin-right:100px;
`

const Icono1 = styled.img`
  width: auto;
  height: 40px;
  padding:10px;
`


const Section = styled.section`
  display:flex;
  position:absolute;
  width: auto;
  height: auto;
  left:10vw;
`

const Musica = styled.audio`
  display:flex;
  position:absolute;
  left:10vw;
`

const BtnStart = styled.button`
  height:80px;
  width: 300px;
  font-size: 40px;
  font-weight: bold;
  color: #091326;
  text-align: center;
  cursor: pointer;
  font-size:24px;
  margin-top:20px;
  padding:20px 60px;
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

const BtnRandomize = styled.button`
  display:flex;
  justify-content: center;
  align-items:center;
  width:55px;
  height:40px;
  font-size: 25px;
  font-weight: bold;
  color: #091326;
  text-align: center;
  cursor: pointer;
  margin-bottom:10px;
  margin-left:20px;
  padding:10px;
  font-size:24px;
  outline: none;
  background: radial-gradient(circle, rgba(29,100,242,1) 0%, rgba(23,79,191,1) 100%);
  border: none;
  border-radius:5px;
  box-shadow: 0 9px #163E8C;
  
  &:hover{
        background-color: rgba(2,73,89,1) 35%;
  }
  
  &:active {
    background-color: rgba(2,73,89,1) 35%;
    box-shadow: 0 5px #163E8C;
    transform: translateY(4px);
  }
`

const Home = () => {
  const [w, setWidth] = React.useState('')
  const [h, setHeight] = React.useState('')
  const [page, setPage] = React.useState(true)
  if (page === true) {
    return (
      <Main>
        <Section>
          <Musica autoPlay loop id="track">
            <source src={Music} />
          </Musica>
          <Imagen src={Pacman} />
          <InputSection>
            <Texto1>CREA TU LABERINTO</Texto1>
            <Texto2>Escoge el tamaño que le quieres dar a tu laberinto</Texto2>
            <InputFieldsSection>
              <InputField
                id="Alto"
                placeholder="Altura"
                type="number"
                value={h}
                min="1"
                max="7"
                onChange={(event) => { return setHeight((event.target.value)) }}
              />
              <InputField
                id="Ancho"
                placeholder="Ancho"
                type="number"
                value={w}
                min="1"
                max="13"
                onChange={(event) => { return setWidth((event.target.value)) }}
              />
              <BtnRandomize onClick={() => {
                const randAncho = String(Math.floor(Math.random() * 12) + 2)
                const randAlto = String(Math.floor(Math.random() * 6) + 2)
                document.getElementById('Ancho').value = randAncho
                document.getElementById('Alto').value = randAlto
                setWidth((randAncho))
                setHeight((randAlto))
              }}
              >
                <Icono1 src={RandomIcon} />
              </BtnRandomize>
            </InputFieldsSection>
            <InputFieldsSection>
              <BtnStart onClick={() => {
                if (w === '' || h === '') {
                  return alert('Llene ambos campos')
                } if (parseInt(h, 10) > 8) {
                  return alert('Oops! La altura maxima que se puede ingresar es de 8')
                } if (parseInt(w, 10) > 14) {
                  return alert('Oops! El ancho maximo que se puede ingresar es de 14')
                }
                setPage(false)
                return true
              }}
              >
                JUGAR
              </BtnStart>
              <BtnMusic />
            </InputFieldsSection>
          </InputSection>
        </Section>
      </Main>
    )
  }
  if (page === false) {
    return (
      <Game w={w} h={h} />
    )
  }
  return true
}

export default Home
