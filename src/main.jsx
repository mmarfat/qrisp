// React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Redux
import { Provider } from 'react-redux'; // Import the Provider from react-redux
import { store } from './store';

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
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
