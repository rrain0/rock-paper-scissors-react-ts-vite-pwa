import styled from '@emotion/styled'
import { useViewportOrientation } from 'src/util/react/useViewportOrientation.ts'
import React from 'react'
import Modal from 'src/ui/components/Modal/Modal.tsx'
import ModalPortal from 'src/ui/components/Modal/ModalPortal.tsx'
import { ModalStyle } from 'src/ui/components/Modal/ModalStyle.ts'
import { EmotionCommon } from 'src/ui/styles/EmotionCommon.ts'
import centerAll = EmotionCommon.centerAll
import turnToLandImg from '@img/turn-to-landscape-with-text.png'



const LandscapeWarning =
React.memo(
()=>{
  
  const { isPortrait } = useViewportOrientation()
  
  return <>
    { isPortrait && <ModalPortal>
      <Modal css={ModalStyle.modal}>
        <Frame>
          <TurnToLandImg alt="Переверните устройство" src={turnToLandImg}/>
        </Frame>
      </Modal>
    </ModalPortal> }
  </>
})
export default LandscapeWarning



const Frame = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  ${centerAll};
`


const TurnToLandImg = styled.img`
  place-self: stretch;
  width: 100%;
  height: 100%;
  object-fit: contain;
`
