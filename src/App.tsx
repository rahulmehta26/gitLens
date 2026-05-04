import { lazy, Suspense } from 'react'
import Layout from './components/layout/Layout';
import { Route, Routes } from 'react-router-dom';

const LandingPage = lazy(() => import("./pages/landing/LandingPage"));
const AnalyzePage = lazy(() => import("./pages/AnalyzePage"));
const RouteError = lazy(() => import("./pages/error/RouteError"));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<LandingPage />} />
          <Route
            path="/analyze"
            element={
              <AnalyzePage />
            }
          />
          <Route path='*' element={<RouteError />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App