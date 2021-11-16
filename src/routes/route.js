const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel")

const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const AssignmentBookController= require("../controllers/assignmentBookController")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createUser',  UserController.createUser  );
router.get('/getAllUsers',  UserController.getUsersData  );

router.post('/createBook',  BookController.createBook  );
router.get('/getAllBooks',  BookController.getBooksData  );

// mongo session 3: session/schema-basic3
router.get('/getFirstBook',  BookController.getBook  );
router.post('/updateBooks',  BookController.updateBooks  );

router.post('/deleteBook',  BookController.deleteBook  );


// Previous Day asignment API's
router.post('/createBook',  AssignmentBookController.createBook  );
router.get('/bookList',  AssignmentBookController.allBooksList  );
router.post('/getParticularBooks',  AssignmentBookController.particularBooks  );
 router.post('/getBooksInYear',AssignmentBookController.yearDetails);
router.get('/getXINRBooks',  AssignmentBookController.priceDetails  );
router.get('/getRandomBooks', AssignmentBookController.randomBooks  );



module.exports = router;