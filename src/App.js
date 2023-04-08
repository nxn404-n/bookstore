import React from 'react';
import {
  BrowserRouter as Router, Route, Link,
} from 'react-router-dom';
import BookList from './components/Booklist';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/categories">Categories</Link></li>
          </ul>
        </nav>

        <div>
          <Route exact path="/" component={BookList} />
          <Route path="/categories" component={Categories} />
        </div>
      </div>
    </Router>
  );
}

export default App;
