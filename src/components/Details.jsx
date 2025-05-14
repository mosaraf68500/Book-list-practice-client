import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {
    const details=useLoaderData();
     const {_id, title, author, page, puplishedYear } = details;
    return (
        <div>
      <div className=" mx-auto mt-10 bg-gray-100 rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">
         {title}
        </h2>
        <p className="text-gray-700">
          <span className="font-semibold">Author:</span> {author}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Pages:</span> {page}
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Published:</span> {puplishedYear}
        </p>

        
      </div>
    </div>
    );
};

export default Details;