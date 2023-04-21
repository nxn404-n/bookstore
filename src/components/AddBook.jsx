import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, getBookList } from '../redux/getApiData';

export default function AddBook() {
  const [book, setBook] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemId = uuid();
    dispatch(addBook({
      URL,
      newBook: {
        item_id: itemId,
        ...book,
        category: '',
      },
    })).then(() => {
      dispatch(getBookList(URL));
    });
    setBook({
      title: '',
      author: '',
    });
  };

  return (
    <div className="add-book">
      <h2>Add new book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" name="title" value={book.title} onChange={handleInputChange} required />
        <input type="text" placeholder="Author" name="author" value={book.author} onChange={handleInputChange} required />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
}
