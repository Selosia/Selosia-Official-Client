import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routers/Router'
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {

  return (
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  )
}

export default App

