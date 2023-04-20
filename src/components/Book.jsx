import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getBookList, removeBook } from '../redux/getApiData';

const Book = ({ title, author, itemId }) => {
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  const handleRemove = async () => {
    try {
      await dispatch(removeBook({ URL, itemId }));
      dispatch(getBookList(URL));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="book-container">
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={handleRemove}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Book;
