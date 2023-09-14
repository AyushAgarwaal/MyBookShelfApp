import React from 'react';
import "../styles/bookCard.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookCard = ({ book }) => {
    const addToBookshelf = async (book) => {
    try{
        const currentBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        currentBookshelf.push(book);
        localStorage.setItem('bookshelf', JSON.stringify(currentBookshelf));
    }
    catch(error){
    console.error('Error with localStorage:', error);
    }
       
    };
    const hello = async () => {
        addToBookshelf(book);
        toast.success('Book Added Successfully', {
            autoClose: 3000,
        });
    };

    return (
        <li>
            <div className='book-card'>
                <h2>Book Title : {book.title}</h2>
                <p>Author: {book.author_name ? book.author_name.join(', ') : 'N/A'}</p>
                <button onClick={hello} className="addBook-btn">Add to Bookshelf</button>

            </div>
        </li>
    );
};

export default BookCard;    
