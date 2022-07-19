import React from 'react'
import { createRoot } from 'react-dom/client'

// import { StoreContext } from './utils/context'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'

createRoot(document.getElementById('root')).render(
  // <StoreContext.Provider value={store}>
  //   <App />
  // </StoreContext.Provider>
  <Provider store={store}>
    <App />
  </Provider>
)
