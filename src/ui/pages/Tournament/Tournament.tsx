import styled from '@emotion/styled'
import React from 'react'
import parse from 'html-react-parser'
import { useParams } from 'react-router-dom'
import { Pages } from 'src/ui/components/Pages/Pages'
import rays from '@img/rays.png'
import trophy from '@img/trophy-award-laurel-wreath-composition-with-realistic-image-of-golden-cup-decorated-with-garland-with-reflection_1284-32301.jpg'
import Button from 'src/ui/elements/Button/Button.tsx'
import { ButtonStyle } from 'src/ui/elements/Button/ButtonStyle.ts'
import { EmotionCommon } from 'src/ui/style/EmotionCommon.ts'
import Txt = EmotionCommon.Txt
import abs = EmotionCommon.abs
import col = EmotionCommon.col



const Tournament =
React.memo(
()=>{
  const tournamentId = useParams().tournamentId!
  
  const tournamentName = `Турнир ${tournamentId}`
  const tournamentLevel = '20'
  const tournamentRules = `\
    <p>1. Правило 1</p>
    <p>2. Правило 2</p>
    <p>3. Правило 3</p>
    <p>4. Правило 4</p>
  `
  
  return <Pages.Page>
    <Pages.ContentClampAspectRatio>
      <Layout>
        <Bgc />
        <Rays src={rays}/>
        
        <Tour>
          <div>{tournamentName}</div>
          <div>Сложность: {tournamentLevel}</div>
          <div style={{ flex: 1 }}/>
          <div>Правила турнира</div>
        </Tour>
        {/* <Img src={trophy}/> */}
        <Img/>
        <Rules>{parse(tournamentRules)}</Rules>
        <Btn>Участвовать</Btn>
      </Layout>
    </Pages.ContentClampAspectRatio>
  </Pages.Page>
})
export default Tournament



const Layout = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  
  display: grid;
  grid:
    'tour  img'   2fr
    'rules rules' 1.3fr
    'btn   btn'   0.7fr
  / 3fr    2fr;
  gap: 10px;
  padding: 20px 20px 10px 20px;
`
const Tour = styled.div`
  grid-area: tour;
  ${col};
  gap: 20px;
  color: white;
  ${Txt.large1};
  z-index: 0;
`
/* const Img = styled.img`
  grid-area: img;
  place-self: start end;
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-height: 100%;
  z-index: 0;
` */
const Img = styled.div`
  grid-area: img;
  place-self: stretch stretch;
  object-fit: contain;
  background: url(${trophy});
  background-position: top right;
  background-size: auto 100%;
  background-repeat: no-repeat;
  z-index: 0;
`
const Rules = styled.div`
  grid-area: rules;
  place-self: stretch stretch;
  min-height: 40px;
  z-index: 0;
  overflow-y: auto;
  border: 2px solid white;
  border-radius: 10px;
  padding: 5px;
  ${Txt.normal1};
  color: white;
`
const Btn = styled(Button)`
  ${ButtonStyle.button};
  grid-area: btn;
  place-self: center;
`


const Bgc = styled.div`
  ${abs};
  background: #004bbc;
`
const Rays = styled.img`
  position: absolute;
  left: 50%;
  top: 87.5%;
  width: 100%;
  height: auto;
  translate: -50% -50%;
  scale: 2;
`