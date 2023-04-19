import { NavLink } from 'react-router-dom';

export default function NavigationHeader() {
  return (
    <header>
      <nav className="navbar">
        <div>
          <h1>Bookstore</h1>
          <NavLink to="/">Books</NavLink>
          <NavLink to="/categories">Categories</NavLink>
        </div>
      </nav>
    </header>
  );
}
