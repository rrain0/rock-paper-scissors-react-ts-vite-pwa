import React from 'react'
import { clearUnknownPathEnding } from 'src/util/react-router/ReactRouterUtils.tsx'
import { Navigate, RouteObject, useParams } from 'react-router-dom'
import Tournament from 'src/ui/pages/Tournament/Tournament.tsx'






const TournamentTournamentId =
React.memo(()=>{
  const tournamentId = useParams().tournamentId!
  
  const allowedIds = ['1','2','3']
  
  if (allowedIds.includes(tournamentId))
    return <Tournament/>
  else
    return <Navigate to={'/main-menu'} replace />
})


// path: 'tournament / :tournamentId / <check-here>'
const tournamentTournamentIdRouting: RouteObject[] = [
  {
    path: '',
    Component: TournamentTournamentId,
  },
  clearUnknownPathEnding,
]



// path: 'tournament / <check-here>'
export const tournamentRouting: RouteObject[] = [
  {
    path: '',
    element: <Navigate to={'/main-menu'} replace />,
  },
  {
    path: ':tournamentId/*',
    children: tournamentTournamentIdRouting,
  },
  clearUnknownPathEnding,
]


