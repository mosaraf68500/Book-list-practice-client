import React, { Suspense } from 'react';
import Books from './Books';
import Header from './Header';
import AllBooks from './AllBooks';

const BooksPromise=fetch('http://localhost:5000/books').then(res=>res.json());

const Home = () => {


    
    return (
        <div className=''>
            {/* <Header></Header> */}
           <Suspense fallback={<p>Loading...</p>}>
            <AllBooks BooksPromise={BooksPromise}></AllBooks>
           </Suspense>
        </div>
    );
};

export default Home;