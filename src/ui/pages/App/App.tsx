import React from 'react'
import AppFrame from 'src/ui/pages/App/AppFrame.tsx'
import { EmotionCommon } from 'src/ui/styles/EmotionCommon.ts'
import contents = EmotionCommon.contents



const App =
React.memo(
()=>{
  return <>
    <AppFrame/>
  </>
})
export default App
