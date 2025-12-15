import React from 'react';
import { ThemeProvider } from './ThemeContext'; 
import 'aos/dist/aos.css';
import AppContent from './components/AppContent';

const App: React.FC = () => (
    <ThemeProvider>
        <AppContent />
    </ThemeProvider>
);

export default App;