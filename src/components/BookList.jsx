import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';

export default function BookList() {
  const bookList = useSelector((state) => state.booklist.value);

  return (
    <section className="books-container-section">
      {bookList.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} id={book.id} />
      ))}

      <AddBook />
    </section>
  );
}
