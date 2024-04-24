import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import rays from '@img/rays.png'
import { MathUtils } from '@util/common/MathUtils.ts'
import { Pages } from 'src/ui/components/Pages/Pages'
import React, { useEffect, useState } from 'react'
import enemyAva from '@img/enemy-ava.jpg'
import playerAva from '@img/player-ava.jpg'
import btnRock from '@img/btn-rock.png'
import btnRockActive from '@img/btn-rock-active.png'
import btnScissors from '@img/btn-scissors.png'
import btnScissorsActive from '@img/btn-scissors-active.png'
import btnPaper from '@img/btn-paper.png'
import btnPaperActive from '@img/btn-paper-active.png'
import rock from '@img/rock.png'
import scissors from '@img/scissors.png'
import paper from '@img/paper.png'
import Button from 'src/ui/elements/Button/Button.tsx'
import { ButtonStyle } from 'src/ui/elements/Button/ButtonStyle.ts'
import { EmotionCommon } from 'src/ui/style/EmotionCommon.ts'
import randomInt = MathUtils.randomInt
import abs = EmotionCommon.abs
import Txt = EmotionCommon.Txt
import row = EmotionCommon.row
import center = EmotionCommon.center
import rotateAnim = EmotionCommon.rotateAnim



const timeOfSingleShake = 700 // ms



type RockPaperScissors = 'rock' | 'paper' | 'scissors'
function rockPaperScissors(): RockPaperScissors {
  const r = randomInt(2)
  if (r === 0) return 'rock'
  if (r === 1) return 'paper'
  return 'scissors'
}




const GameScreen =
React.memo(
()=>{
  
  const tourData = {
    enemyAva: enemyAva,
    enemyName: 'Имя соперника',
    enemyPts: 0,
    tourNumber: 1,
    tourLevel: 20,
    playerAva: playerAva,
    playerName: 'Имя игрока',
    playerPts: 0,
  }
  
  const [selected, setSelected] = useState<RockPaperScissors | undefined>(undefined)
  const [enemyHand, setEnemyHand] = useState<RockPaperScissors | undefined>(undefined)
  const [playerHand, setPlayerHand] = useState<RockPaperScissors | undefined>(undefined)
  
  const [gameState, setGameState] = useState<'start'|'game'|'end'>('start')
  
  useEffect(()=>{
    if (selected) setGameState('game')
  }, [selected])
  useEffect(() => {
    if (gameState==='game'){
      const timerId = setTimeout(
        ()=>{
          setEnemyHand(rockPaperScissors())
          setPlayerHand(selected)
          setGameState('end')
        },
        timeOfSingleShake*3
      )
      return ()=>clearTimeout(timerId)
    }
  }, [gameState])
  
  useEffect(()=>{
    if (gameState==='end'){
      const timerId = setTimeout(
        ()=>{
          setSelected(undefined)
          setEnemyHand(undefined)
          setPlayerHand(undefined)
          setGameState('start')
        },
        3000
      )
      return ()=>clearTimeout(timerId)
    }
  }, [gameState])
  
  
  const rockBgc = function(){
    if (selected===undefined) return `url(${btnRock})`
    if (selected==='rock') return `url(${btnRockActive})`
    return `linear-gradient(#00000088, #00000088), url(${btnRock})`
  }()
  const scissorsBgc = function(){
    if (selected===undefined) return `url(${btnScissors})`
    if (selected==='scissors') return `url(${btnScissorsActive})`
    return `linear-gradient(#00000088, #00000088), url(${btnScissors})`
  }()
  const paperBgc = function(){
    if (selected===undefined) return `url(${btnPaper})`
    if (selected==='paper') return `url(${btnPaperActive})`
    return `linear-gradient(#00000088, #00000088), url(${btnPaper})`
  }()
  
  const enemyHandImg = function(){
    if (enemyHand===undefined) return `url(${rock})`
    if (enemyHand==='rock') return `url(${rock})`
    if (enemyHand==='scissors') return `url(${scissors})`
    if (enemyHand==='paper') return `url(${paper})`
  }()
  const playerHandImg = function(){
    if (playerHand===undefined) return `url(${rock})`
    if (playerHand==='rock') return `url(${rock})`
    if (playerHand==='scissors') return `url(${scissors})`
    if (playerHand==='paper') return `url(${paper})`
  }()
  
  
  return <Pages.Page>
    <Pages.ContentClampAspectRatio>
      <Content>
        <Bgc />
        <Rays src={rays} isRotating={gameState==='end'}/>
        
        
        <Hands>
          <Hand
            style={{ backgroundImage: enemyHandImg }}
            isShaking={gameState==='game'}
          />
          <Hand
            style={{ backgroundImage: playerHandImg }}
            isRight
            isShaking={gameState==='game'}
          />
        </Hands>
        
        <Layout>
          
          <StatusBar>
            <Ava style={{ backgroundImage: `url(${enemyAva})` }} />
            <NameContainer><Name>{tourData.enemyName}</Name></NameContainer>
            <PtsContainer><Pts>{tourData.enemyPts}</Pts></PtsContainer>
            <Tour>
              <div>Тур</div>
              <div>3/20</div>
            </Tour>
            <PtsContainer><Pts>{tourData.playerPts}</Pts></PtsContainer>
            <NameContainer><Name>{tourData.playerName}</Name></NameContainer>
            <Ava style={{ backgroundImage: `url(${playerAva})` }}/>
          </StatusBar>
          <div/>
          <ActionBar>
            <Button css={ButtonStyle.action}
              style={{ backgroundImage: rockBgc }}
              onClick={()=>{ if (!selected) setSelected('rock') }}
            />
            <Button css={ButtonStyle.action}
              style={{ backgroundImage: scissorsBgc }}
              onClick={()=>{ if (!selected) setSelected('scissors') }}
            />
            <Button css={ButtonStyle.action}
              style={{ backgroundImage: paperBgc }}
              onClick={()=>{ if (!selected) setSelected('paper') }}
            />
          </ActionBar>
          
        </Layout>
      </Content>
    </Pages.ContentClampAspectRatio>
  </Pages.Page>
})
export default GameScreen


const Content = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  color: white;
`


const Bgc = styled.div`
  ${abs};
  background: #004bbc;
`

const Rays = styled.img<{ isRotating: boolean }>`
  position: absolute;
  left: 50%;
  top: 60px;
  width: 100%;
  height: auto;
  translate: -50% -50%;
  scale: 2;
  ${p=>p.isRotating && css`animation: ${rotateAnim} 5s linear infinite`};
`


const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  
  display: grid;
  grid-template-rows: auto 1fr auto;
  justify-items: stretch;
  gap: 10px;
  padding: 20px 60px 10px 60px;
`


const StatusBar = styled.section`
  ${row};
  border-radius: 20px;
  background: #00000055;
  height: 80px;
  padding: 6px;
`
const Ava = styled.div`
  height: 100%;
  width: auto;
  aspect-ratio: 1;
  background-size: cover;
  background-position: center;
  border-radius: 999999px;
`
const NameContainer = styled.div`
  height: 100%;
  flex:1;
  padding-left: 10px;
  padding-right: 10px;
  ${center};
`
const Name = styled.div`
  ${Txt.large2};
  overflow-wrap: anywhere;
  text-align: center;
`

const PtsContainer = styled.div`
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  ${center};
`
const Pts = styled.div`
  ${Txt.large6};
`

const Tour = styled.div`
  height: 100%;
  aspect-ratio: 1;
  border-radius: 10px;
  background: white;
  display: grid;
  grid-template-rows: auto auto;
  place-content: center;
  justify-items: center;
  color: black;
  ${Txt.large2};
  line-height: 129%;
`


const Hands = styled.section`
  ${abs};
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const shakeAnim = keyframes`
  0% { translate: 0 0 }
  25% { translate: 0 -100px }
  50% { translate: 0 0 }
  75% { translate: 0 100px }
  100% { translate: 0 0 }
`
const Hand = styled.div<{ isRight?: boolean, isShaking: boolean }>`
  height: 100%;
  width: 100%;
  background-position: left 80%;
  background-size: 50% auto;
  background-repeat: no-repeat;
  ${p=>p.isRight && css`scale: -1 1`};
  ${p=>p.isShaking && css`animation: ${shakeAnim} ${timeOfSingleShake}ms linear infinite`};
`


const ActionBar = styled.section`
  height: 80px;
  ${row};
  justify-content: center;
  gap: 50px;
`
