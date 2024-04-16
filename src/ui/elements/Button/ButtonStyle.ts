import { css } from '@emotion/react'
import buttonBgc from '@img/button-bgc.png'
import { EmotionCommon } from 'src/ui/styles/EmotionCommon.ts'
import Txt = EmotionCommon.Txt




export namespace ButtonStyle {
  
  
  export const button = css`
    width: 300px;
    height: 80px;
    background: url(${buttonBgc});
    background-size: 100% 100%;
    color: white;
    ${Txt.large5};
    text-transform: uppercase;
  `
  
  
}