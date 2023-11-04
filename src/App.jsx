import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routers/Router'
import { ParallaxProvider } from 'react-scroll-parallax';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()




function App() {

  return (
   
    <QueryClientProvider client={queryClient}>
      <ParallaxProvider>
        <RouterProvider router={router} />
      </ParallaxProvider>
    </QueryClientProvider>

    
   
  )
}

export default App

