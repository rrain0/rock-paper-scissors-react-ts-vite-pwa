import styled from '@emotion/styled'
import React from 'react'
import { Pages } from 'src/ui/components/Pages/Pages'
import { EmotionCommon } from 'src/ui/style/EmotionCommon.ts'
import center = EmotionCommon.center



const Tournament =
React.memo(
()=>{
  //return <>Tournament</>
  return <Pages.Page>
    <Pages.ContentClampAspectRatio>
      <Frame>
        Турнир
      </Frame>
    </Pages.ContentClampAspectRatio>
  </Pages.Page>
})
export default Tournament


const Frame = styled.div`
  width: 100%;
  height: 100%;
  color: aqua;
  ${center};
`
