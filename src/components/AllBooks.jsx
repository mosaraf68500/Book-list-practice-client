import React, { use, useState } from 'react';
import AllBook from './AllBook';

const AllBooks = ({BooksPromise}) => {
    const Books=use(BooksPromise)
    // console.log(Books)
    const initialBook=Books;
    // console.log(initialBook);
    const [books,setBooks]=useState(initialBook);
    return (
        <div className='grid grid-cols-3 justify-between items-center gap-4 w-11/12 mx-auto'>
            {
                books.map(book=><AllBook setBooks={setBooks} key={book._id} book={book}></AllBook>)
            }
        </div>
    );
};

export default AllBooks;