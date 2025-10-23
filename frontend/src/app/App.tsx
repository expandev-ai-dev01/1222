/**
 * @component App
 * @summary Root application component
 * @description Main application component that wraps all providers and routing
 */

import { AppProviders } from './providers';
import { AppRouter } from './router';

export const App = () => {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
};

export default App;
