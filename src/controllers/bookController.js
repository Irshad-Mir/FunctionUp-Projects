const BookModel = require("../models/bookModel.js");
const mongoose = require("mongoose");

const createBook = async function (req, res) {

  try { 
    
    const book = req.body; // book = { }
    if (body) {
      // jansdknajsdn
    }
    else {
      res.status(400).send({msg: "BAD REquest"})
    }
    let savedBook = await BookModel.create(book); //  .create ( { } )
    // if error above, execution will break here and move to catch
    res.status( 200 ).send({ msg: savedBook });

  }
  catch ( err )
  {
    
    console.log("This is the error: ", err)
    res.status(500).send(  { msg: "Server error", error: err}  )



    // 2xx - Success
    // 4xx - Something gone wrong..and wrong from the user side
    // 5xx - Server side problems



// // HTTP Status codes
// - always sent with res..ONLY sent with res 
// - specific status codes for specific success and failure scenarios

// "BAD REQUEST" ...400


// "RESOURCE NOT FOUND"...404 //404 page not found...eg. find ("asaijndianud89")...let book =bookModel.findOne({_id:"asaijndianud89"})   if (book){..} else res.status(404).send({})
// "AUTHENTICATION MISSING"...401...if(token){...} else { res.status(401)}
// "NOT AUTHENTICATED OR FORBIDDEN"..403 // if ( token.userId === userId) {...} else {res.status(403).send({}) }

// -- try catch ....// "SERVER ERROR"...500

// -- ALL GOOD... //status(200)- OK

  }

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
