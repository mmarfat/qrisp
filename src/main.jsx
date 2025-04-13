// React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Shadcn
import { ThemeProvider } from '@/components/theme/theme-provider';

// Utils
import './index.css'
import App from './App';

// Fonts
import '@fontsource-variable/inter';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
