import axios from "axios";
import React, { useEffect, useState } from "react";
import './admin.css';

const BooksManagement = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    image: "",
  });

  const [books,setBooks] = useState([]);

  const [editId,setEditId] = useState(null);

  const [show,setShow] = useState(false);


  const fetchBooks = async()=>{
    try{
      const res = await axios.get('http://localhost:3000/books')
      setBooks(res.data);
    }
    catch(error){
      console.log('Faild to fetch books..',error)
    }
  }

  useEffect(()=>{
    fetchBooks();
  },[books])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(editId){
      await axios.put(`http://localhost:3000/books/${editId}`,form)
       alert("Book updated successfully.!");
       setEditId(null);
      setForm({ name: "", description: "", price: "", author: "", image: "" });
    }
    else{
       try {
      await axios.post("http://localhost:3000/books", form);
      alert("Book added successfully.!");
      setForm({ name: "", description: "", price: "", author: "", image: "" });
    } catch (error) {
      console.log("Failed to add book.!!", error);
    }
    }
  };

  const handleEdit = (b)=>{
    setEditId(b.id);
    setForm({
      name:b.name,
      description:b.description,
      price:b.price,
      author:b.author,
      image:b.image
    })
    setShow(true)
  }

  const handleDelete = async(id)=>{
    try{
      await axios.delete(`http://localhost:3000/books/${id}`)
      alert('Book Deleted successfully.!!');
    }
    catch(error){
      console.log('Faild to delete book.!!',error)
    }
  }

  return (
    <div>

      <button className="add-btn" onClick={()=>setShow(true)}>Add Book</button>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th style={{width:"30%"}}>Description</th>
            <th>Price</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 ? <h2>No Books Found.!!</h2>:books.map((b)=>(
            <tr key={b.id}>
              <td><img src={b.image} alt="" /></td>
              <td>{b.name}</td>
              <td>{b.description}</td>
              <td>{b.price}</td>
              <td>{b.author}</td>
              <td><button onClick={()=>handleEdit(b)}>Edit</button><button style={{backgroundColor:"red"}} onClick={()=>handleDelete(b.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {show &&<form className="add-form" onSubmit={handleSubmit}>
        {editId ? <h2>Update Book</h2>:<h2>Add New Book</h2>}
        <input
          type="text"
          placeholder="Title"
          onChange={handleChange}
          name="name"
          value={form.name}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={handleChange}
          name="description"
          value={form.description}
        />
        <input
          type="text"
          placeholder="Price"
          onChange={handleChange}
          name="price"
          value={form.price}
        />
        <input
          type="text"
          placeholder="Author"
          onChange={handleChange}
          name="author"
          value={form.author}
        />
        <input
          type="text"
          placeholder="Image"
          onChange={handleChange}
          name="image"
          value={form.image}
        />
       {editId ?  <button>Update Book</button> :  <button>Add Book</button>}
      <button onClick={()=>setShow(false)}>Hide</button>
      </form>}
    </div>
  );
};

export default BooksManagement;
