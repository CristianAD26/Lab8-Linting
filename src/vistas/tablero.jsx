import React from 'react'
import styled from '@emotion/styled'
import Character from '../componentes/player.jsx'
import Camino from '../componentes/camino.jsx'
import Goal from '../componentes/cherry.jsx'
import Muro from '../componentes/muro.jsx'
import End from './victoria.jsx'
import Music from '../audios/musicgame.mp3'
import MusicBtn from '../componentes/musicplayer.jsx'
import bg from '../imagenes/background.png'

const ButonAbsolute = styled.section`
  position:absolute;
  top:5px;
  left:5px;
`

const Content = styled.section`
  display: flex;
  background-image:url(${bg});
  image-repeat:repeat;
  image-size:auto;
  width: auto;
  height: 100vh;
  align-items: center;
  justify-content:center;
`

const handleLink = (w, h) => {
  const url = 'https://maze.juanelcaballo.club/?type=json'
  const nUrl = url.concat('&w=', w)
  const n2Url = nUrl.concat('&h=', h)
  return (
    n2Url
  )
}

const Game = ({ w, h }) => {
  const FH = ((parseInt(h, 11) * 2) + 1)
  const FW = ((parseInt(w, 10) * 3) + 1)
  
  const [data, setData] = React.useState([])
  const [page, setPage] = React.useState(true)
  
  const Conteiner = styled.section`
    margin-left:5px;
    text-align: center;
    justify-items: center;
    display: grid  ;
    grid-template-columns: repeat(${FW}, 40px);
    grid-template-rows: repeat(${FH}, 50px);
    `
  
  const Move = ('keyup', (event) => {
    const change = [...data]
    const y = change.findIndex((yy) => { return yy.indexOf('p') > -1 })
    const x = change[y].findIndex((xx) => { return xx === 'p' })
          
    switch (event.key) {
      case 'ArrowLeft':
        if (change[y][x - 1] === ' ') {
          change[y][x] = ' '
          change[y][x - 1] = 'p'
        } else if (change[y][x - 1] === 'g') {
          setPage(false)
        }
        setData(change)
        return change
      case 'ArrowRight':
        if (change[y][x + 1] === ' ') {
          change[y][x] = ' '
          change[y][x + 1] = 'p'
        } else if (change[y][x + 1] === 'g') {
          setPage(false)
        }
        setData(change)
        return change
      case 'ArrowUp':
        if (change[y - 1][x] === ' ') {
          change[y][x] = ' '
          change[y - 1][x] = 'p'
        } else if (change[y - 1][x] === 'g') {
          setPage(false)
        }
        setData(change)
        return change
          
      case 'ArrowDown':
        if (change[y + 1][x] === ' ') {
          change[y][x] = ' '
          change[y + 1][x] = 'p'
        } else if (change[y + 1][x] === 'g') {
          setPage(false)
        }
        setData(change)
        return change
      default:
    }
    return true
  })
  
  React.useEffect(() => {
    const url = handleLink(w, h)
    fetch(url)
      .then((response) => { return response.json() })
      .then((sndData) => { return setData(sndData) })
  }, [])
  
  window.onkeydown = Move
  if (page === true) {
    return (
      <Content>
        <ButonAbsolute>
          <MusicBtn />
        </ButonAbsolute>
        <audio autoPlay loop id="track">
          <source src={Music} />
          <track
            default
            kind="captions"
            srcLang="en"
            src={Music}
          />
        </audio>
        <Conteiner>
          {data && data.map((data1) => {
            return (
              data1.map((data2, index2) => {
                const value = index2
                if ((data2 === '-') || (data2 === '|') || (data2 === '+')) {
                  return (
                    <Muro key={value} value={data2} />
                  )
                }
                if (data2 === 'g') {
                  return (
                    <Goal key={value} />
                  )
                }
                if (data2 === 'p') {
                  return (
                    <Character id="character" key={value} />
                  )
                }
                if (data2 === ' ') {
                  return (
                    <Camino key={value} value="" />
                  )
                }
                return true
              })
            )
          })}
        </Conteiner>
      </Content>
    )
  }
  if (page === false) {
    return (
      <End />
    )
  }
  return true
}

export default Game
