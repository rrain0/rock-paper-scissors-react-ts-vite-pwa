import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'
import { Pages } from 'src/ui/components/Pages/Pages'
import Button from 'src/ui/elements/Button/Button.tsx'
import { ButtonStyle } from 'src/ui/elements/Button/ButtonStyle.ts'
import { EmotionCommon } from 'src/ui/style/EmotionCommon.ts'
import center = EmotionCommon.center
import abs = EmotionCommon.abs
import centerAll = EmotionCommon.centerAll
import rays from '@img/rays.png'
import leftChar from '@img/char-left.png'
import rightChar from '@img/char-right.png'




const MainMenu =
React.memo(
()=>{
  return <Pages.Page>
    <Pages.ContentClampAspectRatio>
      <BgcColor/>
      <BgcRays/>
      
      <LeftChar src={leftChar}/>
      <RightChar src={rightChar}/>
      <Link to={'/tournament'}>
        <Button css={ButtonStyle.button}>Турнир</Button>
      </Link>
    </Pages.ContentClampAspectRatio>
  </Pages.Page>
})
export default MainMenu





const BgcColor = styled.div`
  ${abs};
  //background: #f6bd15;
  background: #004bbc;
  ${center};
`
const BgcRays = styled.div`
  ${abs};
  //background: #ff6c02;
  background: #146dcc;
  mask-image: url(${rays});
  mask-mode: alpha;
  mask-position: center;
  mask-size: cover;
  ${center};
`


const movingOutFromLeftEffect = keyframes`
  from { translate: -100%; }
  to { translate: 0; }
`
const LeftChar = styled.img`
  position: absolute;
  left: 0;
  padding-top: 2%;
  height: 100%;
  width: auto;
  translate: -100%;
  animation: ${movingOutFromLeftEffect} 2s linear forwards;
`


const movingOutFromRightEffect = keyframes`
  from { translate: 100%; }
  to { translate: 0; }
`
const RightChar = styled.img`
  position: absolute;
  right: 0;
  padding-top: 2%;
  height: 100%;
  width: auto;
  translate: 100%;
  animation: ${movingOutFromRightEffect} 2s linear forwards;
`