import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalLayout } from './layout'
import { Home } from './page'
import './style/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <GlobalLayout>
        <Home />  
      </GlobalLayout>
    </ChakraProvider>
  </React.StrictMode>
)
