import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './bookCard';
import "../styles/bookSearch.css";

const BookSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    
    useEffect(() => {
        const searchBooks = async () => {
            if (searchTerm) {
                try {
                    const response = await axios.get(`https://openlibrary.org/search.json?q=${searchTerm}&limit=10&page=1`);
                    setSearchResults(response.data.docs);
                }
                catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
            else {
                setSearchResults([]);
            }

        };

        searchBooks();
    }, [searchTerm]);

    const addToBookshelf = (book) => {
        const currentBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        currentBookshelf.push(book);
        localStorage.setItem('bookshelf', JSON.stringify(currentBookshelf));
      };

    return (
        <div className='book-search'>
            <h1>Search By Book Name</h1>
            <input type="text" className='search-bar' placeholder="Search for books" value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul className='card-column'>
                {searchResults.map((book) => (
                    <BookCard
                        key={book.key}
                        book={book}
                        onAddToBookshelf={addToBookshelf}
                    />
                ))}
            </ul>
        </div>

    );
};

export default BookSearch;
