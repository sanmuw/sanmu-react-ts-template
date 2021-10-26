import React, { Suspense } from 'react'
import Router from './router'

function App() {
  return (
    <Suspense fallback={<span>loading</span>}>
      <Router token={''} />
    </Suspense>
  )
}

export default App
