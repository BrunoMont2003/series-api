import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Shows } from './pages/Shows'
import { SingleShow } from './pages/Shows/id'
import './styles/globals.scss'
const root = document.getElementById('root')
const container = createRoot(root)
container.render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route
          path='/' element={<Home />}
        />
        <Route
          path='shows'
        >
          <Route path='' element={<Shows />} />
          <Route
            path=':id' element={<SingleShow />}
          />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
