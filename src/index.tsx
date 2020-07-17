import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'
import { AnimeProvider } from './Context'
import './global.css'

ReactDOM.render(
  <AnimeProvider>
    <Router>
      <App />
    </Router>
  </AnimeProvider>,
  document.getElementById('root')
)
