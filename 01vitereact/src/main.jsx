import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


function MyApp(){
  const username = 'Chai';
  return(
    <>
     <h1>Custom app {username}</h1>
    </>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)
