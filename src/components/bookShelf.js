import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookShelfCard from './bookShelfCard';
import '../styles/card.css';
import 'react-toastify/dist/ReactToastify.css';

const BookShelf = () => {
    const navigate = useNavigate();
    const [bookshelf, setBookshelf] = useState([]);
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];

    const removeFromBookshelf = (bookToRemove) => {
        const updatedBookshelf = bookshelf.filter((book) => book.key !== bookToRemove.key);
        console.log(updatedBookshelf);
        setBookshelf(updatedBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    };

    const deleteFromBookshelf = () => {
        removeFromBookshelf();
    };

    return (
        <div>
        <button className='deleteBook-btn' onClick={deleteFromBookshelf}>Remove All</button>
            <h1 className='heading'>My Bookshelf</h1>
            <button className='back-btn' onClick={() => navigate('/')}>Go Back</button>
            <ul className='ul-cards'>
                {storedBookshelf.map((book) => (
                    <BookShelfCard key={book.key} book={book} onRemoveFromBookShelf={deleteFromBookshelf} />
                ))}
            </ul>
        </div>
    );
};

export default BookShelf;
