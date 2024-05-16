import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Pages } from 'src/ui/components/Pages/Pages'
import { EmotionCommon } from 'src/ui/style/EmotionCommon.ts'
import abs = EmotionCommon.abs
import appLoadingScreen from '@img/app-loading-screen.png'




const AppLoadingScreen =
React.memo(
()=>{
  
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    const intervalId = setInterval(
      ()=>{
        setProgress(p=>p+10)
      },
      400
    )
    return ()=>clearInterval(intervalId)
  }, [])
  
  
  if (progress >= 100) return <Navigate to={'/main-menu'} />
  return <Pages.Page>
    <Pages.ContentClampAspectRatio>
      
      <Bgc/>
      
      <PageLayout>
        <ProgressBar progress={progress}/>
      </PageLayout>
      
    </Pages.ContentClampAspectRatio>
  </Pages.Page>
})
export default AppLoadingScreen



const Bgc = styled.div`
  ${abs};
  background-image: url(${appLoadingScreen});
  background-size: cover;
  background-position: center;
`


const PageLayout = styled.div`
  ${abs};
  display: grid;
  place-items: start center;
  grid: 'empty' 1fr
        'progress' auto
        'padding' 10%
        / 100%;
`
const ProgressBar = styled.article<{
  progress: number
}>`
  grid-area: progress;
  border: 2px solid white;
  border-radius: 999999px;
  height: 36px;
  width: 240px;
  background-image: linear-gradient(
    to right,
    #dd0000 0% ${p=>p.progress}%,
    transparent ${p=>p.progress}% 100%
  );
`