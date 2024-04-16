import { clearUnknownPathEnding } from 'src/util/react-router/ReactRouterUtils.tsx'
import { RouteObject } from 'react-router-dom'
import Tournament from 'src/ui/pages/Tournament/Tournament.tsx'



// path: 'tournament / <check here>'
export const tournamentRouting: RouteObject[] = [
  {
    path: '',
    Component: Tournament,
  },
  clearUnknownPathEnding,
]


