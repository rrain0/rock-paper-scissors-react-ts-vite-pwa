import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'
import { mainMenuRouting } from 'src/ui/pages/MainMenu/routing.tsx'
import React from 'react'
import { tournamentRouting } from 'src/ui/pages/Tournament/routing.tsx'






// path: '/ <check here>'
const rootRoutes: RouteObject[] = [
  {
    path: 'main-menu'+'/*',
    children: mainMenuRouting,
  },
  {
    path: 'tournament'+'/*',
    children: tournamentRouting,
  },
  {
    path: '*',
    element: <Navigate to={'/main-menu'} replace />
  },
]
const router = createBrowserRouter(rootRoutes)




const AppRouting =
React.memo(
()=>{
  return <RouterProvider router={router} />
})
export default AppRouting


