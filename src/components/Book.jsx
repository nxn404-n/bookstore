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
      <div className="book-info">
        <p className="book-category">Action</p>
        <p className="book-title">{title}</p>
        <p className="book-author">{author}</p>
        <div className="btn-container">
          <button type="button" onClick={() => handleRemove()}>Remove</button>
          <div className="vertical-line"> </div>
          <button className="btn-comment-book" type="button">Comment</button>
          <div className="vertical-line"> </div>
          <button className="btn-edit-book" type="button">Edit</button>
        </div>
      </div>
      <div className="right-container">
        <div className="chart"> </div>
        <div className="progress-container">
          <div className="progress-percentage">40%</div>
          <div className="progress-status">Completed</div>
        </div>
        <div className="vertical-line-big"> </div>
        <div className="chapter-container">
          <div className="current-chapter">CURRENT CHAPTER</div>
          <div className="chapter-name">Chapter 17</div>
          <button type="button" className="update-progress-btn">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Book;
