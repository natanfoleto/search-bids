import { DefaultLayout } from '@/layout/default-layout'
import { Home } from '@/pages/home'
import { Bids } from '@/pages/bids'
import { NotFound } from '@/pages/not-found'
import { createBrowserRouter } from 'react-router-dom'


export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <DefaultLayout />
    ),
    children: [
      { path: '', element: <Home /> },
      { path: 'licitacoes', element: <Bids /> }
    ]
  },

  {
    path: '*',
    element: (
      <NotFound />
    )
  }
])