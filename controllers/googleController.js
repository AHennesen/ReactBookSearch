const axios = require ("axios");
const db = require ("../models");


// searches the google api to find the required books.
// also ensures that books are returned with a title, author, link, desc, nad image.

module.exports = {
    findAll: function (req, res) {
        const {query: params} = req;
        // concat into the string
        console.log(params);
        axios.get("https://www.googleapis.com/books/v1/volumes",{params})
        .then(results => results.data.items.filter(result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks && 
            result.volumeInfo.imageLinks.thumbnail
            ))
            .then(apiBooks =>
                db.Book.find().then(dbBooks =>
                    apiBooks.filter(apiBook =>
                        dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id))
                )
            )
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err));
    }
};