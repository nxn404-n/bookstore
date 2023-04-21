import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import Categories from './components/Categories';
import NavigationHeader from './components/NavHeader';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavigationHeader />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
