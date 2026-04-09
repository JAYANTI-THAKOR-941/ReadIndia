import axios from "axios";
import React, { useState } from "react";

const BooksManagement = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/books", form);
      alert("Book added successfully.!");
      setForm({ name: "", description: "", price: "", author: "", image: "" });
    } catch (error) {
      console.log("Failed to add book.!!", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button>Add Book</button>
      </form>
    </div>
  );
};

export default BooksManagement;
