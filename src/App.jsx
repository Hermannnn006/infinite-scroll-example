import '@/assets/css/index.css'
import { Suspense, lazy } from 'react'
import DefaultLayout from './layout/DefaultLayout'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('@/pages/home'))
// const Kasir = lazy(() => import('@/pages/kasir'))

function App() {

  return (
    <DefaultLayout>
      <Routes>
        <Route
            index
            element={
                <Suspense fallback={ <div>Loading...</div> }>
                  <Home />
                </Suspense>
            }
          />
          {/* <Route
            path="/kasir"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Kasir />
              </Suspense>
            }
          /> */}
      </Routes>
    </DefaultLayout>
  )
}

export default App
