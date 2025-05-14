import React from 'react';
import { useLoaderData } from 'react-router';

const Updated = () => {

    const updatedData=useLoaderData()
    const {_id, title, author, page, puplishedYear } = updatedData;

    const handleUpdated=e=>{
        e.preventDefault();
        const title=e.target.title.value;
        const author=e.target.author.value;
        const page=e.target.page.value;
        const updateBook={title,author,page};
        console.log(updateBook)

        fetch(`http://localhost:5000/update/${_id}`,{
            method:'PUT',
            headers:{
                'content-Type':"application/json"
            },
            body:JSON.stringify(updateBook)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                alert("update successfully")
            }
            console.log('update data',data)
        })
       
    }
    return (
         <div className=" flex items-center justify-center">
      <div className="card bg-base-100 shadow-2xl w-[500px]">
        <div className="card-body w-full flex flex-col justify-center items-center">
          <form onSubmit={handleUpdated}  className="w-full">
            <label className="label">Title</label>
            <input
            name="title"
              type="text"
              className="input input-bordered w-full"
              placeholder={title}
            />
            <label className="label">Author</label>
            <input
            name="author"
              type="text"
              className="input input-bordered w-full"
              defaultValue={author}
            />
            <label className="label">Pages</label>
            <input
            name="page"
              type="number"
              className="input input-bordered w-full"
              placeholder={page}
            />

            <label className="label mt-2">publishedYear</label>
            <input
            name="publishedYear"
              type="number"
              className="input input-bordered w-full"
              placeholder={puplishedYear}
            />

            <button className="btn btn-neutral mt-4 w-full">Add Book</button>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Updated;