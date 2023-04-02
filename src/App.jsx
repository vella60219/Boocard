import 'antd/dist/reset.css'
import './App.css'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {persistor, store } from './redux/store'

import Router from './Router'

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  )
}

export default App
