import styled from '@emotion/styled'
import React from 'react'
import { Pages } from 'src/ui/components/Pages/Pages.ts'


const Tournament =
React.memo(
()=>{
  return <Page>
    Турнир
  </Page>
})
export default Tournament


const Page = styled.main`
  ${Pages.fillViewport};
`