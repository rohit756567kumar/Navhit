import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import background from './assets/background.mp4';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <video autoPlay muted loop playsinline class="bg-video">
      <source src={background} type="video/mp4" />
    </video>
    <App />
  </StrictMode>
);
