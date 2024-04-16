import { useLayoutEffect, useState } from 'react'


export const useViewportOrientation = ()=>{
  const [orientation, setOrientation] = useState(()=>getOrientation())
  const [ratio, setRatio] = useState(()=>getRatio())
  
  useLayoutEffect(()=>{
    const onResize = ()=>{
      setOrientation(getOrientation())
      setRatio(getRatio())
    }
    window.addEventListener('resize', onResize)
    return ()=>window.removeEventListener('resize', onResize)
  }, [])
  
  return {
    orientation,
    isPortrait: orientation==='portrait',
    isLandscape: orientation==='landscape',
    ratio,
  }
}


const getRatio = (): number => {
  const { innerWidth: w, innerHeight: h } = window
  return w/h
}

export type Orientation = 'landscape'|'portrait'|'square'
const getOrientation = (): Orientation => {
  const { innerWidth: w, innerHeight: h } = window
  if (w>h) return 'landscape'
  else if (h>w) return 'portrait'
  else return 'square'
}