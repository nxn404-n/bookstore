/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

function BookList() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author };
    setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
  };

  const handleRemove = (title) => {
    setBooks(books.filter((book) => book.title !== title));
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.title}>
            {book.title}
            by
            {book.author}
            <button type="button" onClick={() => handleRemove(book.title)}>Remove</button>
          </li>
        ))}
      </ul>

      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input id="author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookList;
