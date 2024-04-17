import { css } from '@emotion/react'
import buttonBgc from '@img/button-bgc.png'
import { EmotionCommon } from 'src/ui/style/EmotionCommon.ts'
import Txt = EmotionCommon.Txt




export namespace ButtonStyle {
  
  
  export const button = css`
    width: 230px;
    height: 70px;
    background: url(${buttonBgc});
    background-size: 100% 100%;
    color: white;
    ${Txt.large4};
    text-transform: uppercase;
  `
  
  
}