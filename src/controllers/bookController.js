const BookModel = require("../models/bookModel.js");
const mongoose = require("mongoose");

const createBook = async function (req, res) {
  const book = req.body;
  let savedBook = await BookModel.create(book);
  res.send({ msg: savedBook });
};

const getBooksData = async function (req, res) {
  let allBooks = await BookModel.find();
  res.send({ msg: allBooks });
};

const getBook = async function (req, res) {
  let book = await BookModel.findOne (  {sales: 9 });
//   if (book.length != 0 ) {
    if (book ) { // any value present (except falsey) gets evaluated as true... null, 0  automatically defaults to false
      console.log("HI I FOUND A BOOK")
  }
  else console.log("NO BOOK FOUND")
  res.send( book );
};

const updateBooks = async function (req, res) {
//   let books = await BookModel.updateMany (  {isPublished: false } ,  {author : "PK"}   );  // first json is the query condition  || second condition is the required update or change
//   let books = await BookModel.findOneAndUpdate(  {isPublished: true } ,  {author : "Sabiha"}   );  // it updates only the first matching doc
//   let books = await BookModel.findOneAndUpdate(  {isPublished: true } ,  {author : "Sabiha 3"} , { new: true}  );  // third param : new: true - will give you the updated document
  
//  upsert: true - it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document
let books = await BookModel.findOneAndUpdate(  {bookName : "Hi Pritesh2" } ,  {bookName : "Hi My New Book" , ISBN : "basd87g8h7a88b"} , { upsert: true}  );  
  
//   { author : "PK" }
//   { $set: {author: "PK"}   }
  res.send( books );
};


const deleteBook = async function (req, res) {
    let books = await BookModel.findOneAndUpdate(  req.body ,  {isDeleted: true}  );  
    res.send( books );
};

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.getBook = getBook;
module.exports.updateBooks = updateBooks;
module.exports.deleteBook = deleteBook;
