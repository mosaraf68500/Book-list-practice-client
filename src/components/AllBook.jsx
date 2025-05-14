import React from "react";
import { Link } from "react-router";


const AllBook = ({ book }) => {

    const handleDelete=(id)=>{
        // console.log("delete btn clicked",id)
        fetch(`http://localhost:5000/books/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('after delete',data)
            if(data.deletedCount){
                  alert('delete successfully')

            }
          
        })
    }
  
  const {_id, title, author, page, puplishedYear } = book;
//   console.log(_id)
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

        <div className="flex justify-end gap-3">
          <Link  to={`/details/${_id}`}  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
            Details
          </Link>
          <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md">
            Update
          </button>
          <button onClick={()=>handleDelete(_id)}  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBook;
