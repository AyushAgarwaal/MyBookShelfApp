import React from 'react';

const BookShelfCard = ({ book}) => {
  return (
 
   <li>
      <div>
        <h2>Title : {book.title}</h2>
        <p>Author: {book.author_name ? book.author_name.join(', ') : 'N/A'}</p>
      </div>
    </li>
   
  );
};

export default BookShelfCard;
