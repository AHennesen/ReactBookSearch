import axios from "axios";

export default {
  // Gets all books
  getBooks: function(a) {
    return axios.get("/api/google", { params: { a: "title:" + a } });
  },
  // Gets the saved books
  getSavedBooks: function() {
    return axios.get("/api/books/");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
