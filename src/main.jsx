// React
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

// Shadcn
import { ThemeProvider } from '@/components/theme/theme-provider';

// Utils
import './index.css'
import App from './App';

// i18n
import './i18n';

// Fonts
import '@fontsource-variable/inter';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Suspense>
  </StrictMode>
);
