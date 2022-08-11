import React, { useLayoutEffect, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Center, Spinner } from '@chakra-ui/react'
import { GlobalLayout } from '../layout'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom'
import { Home, About, Contact } from '../page'

export const routesObject = {
  home: 'home',
  about: 'about',
  contact: 'contact',
}

const {
  home,
  about,
  contact
} = routesObject

const RoutesDeclaration: React.FC = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route
          path={home}
          element={
            <GlobalLayout>
              <Home />
            </GlobalLayout>
          }
        />
        <Route
          path={about}
          element={
            <GlobalLayout>
              <About />
            </GlobalLayout>
          }
        />
        <Route
          path={contact}
          element={
            <GlobalLayout>
              <Contact />
            </GlobalLayout>
          }
        />
        <Route
          path="*"
          element={<Navigate to={`${home}`} replace />}
        />
      </Routes>
    </AnimatePresence>
  )
}

export const AppRoutes = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <GlobalLayout>
          <Center height="100%">
            <Spinner h={20} w={20} />
          </Center>
        </GlobalLayout>
      }
    >
      <RoutesDeclaration />
    </Suspense>
  </BrowserRouter>
)
