import React from "react";
import { Navigate, useNavigate } from "react-router";



const Books = () => {

    const navigate=useNavigate();



    const handleAddBook=(e)=>{
    e.preventDefault();
    const target=e.target;
    const title=target.title.value;
    const author=target.author.value;
    const page=target.page.value;
    const puplishedYear=target.publishedYear.value;
    const newBook={title,author,page,puplishedYear};
    console.log(newBook)

    fetch("http://localhost:5000/books",{
        method:'POST',
        headers:{
            "content-Type":"application/json"
        },
        body:JSON.stringify(newBook)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            alert("new book added successfully")
            navigate("/")
        }
    })

}
    
  return (
    <div className=" flex items-center justify-center">
      <div className="card bg-base-100 shadow-2xl w-[500px]">
        <div className="card-body w-full flex flex-col justify-center items-center">
          <form onSubmit={handleAddBook}  className="w-full">
            <label className="label">Title</label>
            <input
            name="title"
              type="text"
              className="input input-bordered w-full"
              placeholder="title"
            />
            <label className="label">Author</label>
            <input
            name="author"
              type="text"
              className="input input-bordered w-full"
              placeholder="author"
            />
            <label className="label">Pages</label>
            <input
            name="page"
              type="number"
              className="input input-bordered w-full"
              placeholder="pages"
            />

            <label className="label mt-2">publishedYear</label>
            <input
            name="publishedYear"
              type="number"
              className="input input-bordered w-full"
              placeholder="publishedYear"
            />

            <button className="btn btn-neutral mt-4 w-full">Add Book</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Books;
