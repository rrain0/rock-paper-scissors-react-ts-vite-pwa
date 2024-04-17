import { css } from '@emotion/react'
import buttonBgc from '@img/button-bgc.png'
import { EmotionCommon } from 'src/ui/style/EmotionCommon.ts'
import Txt = EmotionCommon.Txt




export namespace ButtonStyle {
  
  
  export const button = css`
    width: 200px;
    height: 55px;
    background: url(${buttonBgc});
    background-size: 100% 100%;
    color: white;
    ${Txt.large2};
    text-transform: uppercase;
  `
  
  
}