import './App.scss';
import { BookList, ButtonToggle, Navbar } from './components';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <BookContextProvider>
            <Navbar />
            <BookList />
            <ButtonToggle />
          </BookContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
