import React from 'react'
import LandscapeWarning from 'src/ui/components/LandscapeWarning/LandscapeWarning.tsx'
import AppRouting from 'src/ui/pages/App/AppRouting'
import { EmotionCommon } from 'src/ui/styles/EmotionCommon.ts'
import contents = EmotionCommon.contents




const AppFrame =
React.memo(
()=>{
  return <div css={contents} id='app-frame'>
    <AppRouting/>
    <LandscapeWarning/>
  </div>
})
export default AppFrame


