import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BookingCard from './App.jsx'
// import LandingPage from './components/dummy-landing-page.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookingCard />
    {/* <LandingPage /> */}
  </StrictMode>,
)
