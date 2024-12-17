import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import LoginFormWrapper from './components/LoginFormWrapper'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LoginFormWrapper/>} />
      <Route exact path="/home" element={<Home/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
)

export default App
