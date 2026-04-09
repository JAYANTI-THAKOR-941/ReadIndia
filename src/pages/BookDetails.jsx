import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams();

  const [book, setBook] = useState(null);

  const fetchBook = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/books/${id}`);
      setBook(res.data);
      
    } catch (error) {
      console.log("Faild to fetch book details.");
    }
  };

  useEffect(()=>{
        fetchBook();
  },[id])

  if(!book) return null;
  return(
    <>
        <h3>{book.name}</h3>
    </>
  )
};

export default BookDetails;
