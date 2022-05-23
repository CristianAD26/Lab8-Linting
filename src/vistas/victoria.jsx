import React from 'react'
import styled from '@emotion/styled'
import Win from '../imagenes/pacmanwin.png'
import Home from './home.jsx'
import Music from '../audios/musichome.mp3'
import BtnMusic from '../componentes/musicplayer.jsx'
import bg from '../imagenes/background.png'

const Main = styled.main`
    display: flex;
    background-image:url(${bg});
    image-repeat:repeat;
    image-size:auto;
    width: auto;
    height: 100vh;
    align-items: center;
    justify-content:center;
    `

const ContainerText = styled.section`
    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction:column;
    `

const TextsSection = styled.section`
    display:flex;
    width: auto;
    height: auto;
    align-items: center;
    justify-content:center;
    margin-left:200px;
    `

const Imagen = styled.img`
    width: auto;
    height: 100vh;
    margin-left:1vw;
    `

const Texto1 = styled.h2`
    color:#fff;
    font-size:40px;
    font-weight:bold;
    font-family:VT323 serif;
    justify-content: center;
    margin:0;
    padding:0;
    `
const BtnRegresar = styled.button`
    height:80px;
    width: 250px;   
    font-size: 25px;
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

const FieldsSection = styled.section`
    display:flex;
    justify-content: center;
    align-items:center;
    `

const End = () => {
  const [page, setPage] = React.useState(true)
  if (page === true) {
    return (
      <Main>
        <audio id="track" autoPlay loop>
          <source src={Music} />
          <track
            default
            kind="captions"
            srcLang="en"
            src={Music}
          />
        </audio>
        <TextsSection>
          <ContainerText>
            <Texto1>¡FELICIDADES, GANASTE!</Texto1>
            <FieldsSection>
              <BtnRegresar onClick={() => {
                setPage(false)
              }}
              >
                Regresar
              </BtnRegresar>
              <BtnMusic />
            </FieldsSection>
          </ContainerText>
          <Imagen src={Win} />
        </TextsSection>
      </Main>
    )
  }
  if (page === false) {
    return (
      <Home />
    )
  }
  return true
}
export default End
