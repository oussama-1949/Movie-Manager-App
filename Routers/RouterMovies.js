const express = require('express')
const router = express.Router()
const upload = require('../Middlewares/uploadImage')
const isAuthor = require('../Middlewares/isAuthor')
const {isAuthenticated} = require('../Middlewares/isAuthenticated')



const {GetAllMovies , RenderProfile , RenderAdd , 
    AddMovie , renderUpdate , UpdateMovie , RenderMovie , DeleteMovie , AddImage , RenderImage }  = require('../Controllers/movies')


router.get('/'  ,isAuthenticated, RenderProfile)
router.post('/' , GetAllMovies)
router.get('/add', RenderAdd )
router.post('/add' , upload.single('image')   ,  AddMovie)
router.get('/update/:id'   , renderUpdate)
router.post('/update/:id'  , UpdateMovie)
router.get('/view/:id' , RenderMovie)
router.get('/delete/:id' , DeleteMovie)

module.exports = router