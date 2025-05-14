import React, { use } from 'react';
import AllBook from './AllBook';

const AllBooks = ({BooksPromise}) => {
    const Books=use(BooksPromise)
    // console.log(Books)
    return (
        <div className='grid grid-cols-3 justify-between items-center gap-4 w-11/12 mx-auto'>
            {
                Books.map(book=><AllBook key={book._id} book={book}></AllBook>)
            }
        </div>
    );
};

export default AllBooks;