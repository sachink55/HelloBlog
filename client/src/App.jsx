import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { RouteIndex } from './helpers/RouteName'
import Index from './pages/Index'
import Layout from './Layout/Layout'

const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path={RouteIndex} element={<Layout />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App