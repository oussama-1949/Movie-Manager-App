const express = require('express')
const multer = require('multer')


const {axiosGetMovies , axiosAddMovie , axiosUpdateMovie , axiosGetSingleMovie , axiosDeleteMovie  } = require('../Api/ApiMovies')



// =======================  Profile  =======================

exports.RenderProfile = async (req,res) => {
    const {data} = await axiosGetMovies()
    res.render('profile' , {movies: data})
}
exports.GetAllMovies  =async (req,res) => {
    return  await axiosGetMovies()
}

// =======================  Add and Render Added Movies =======================

exports.RenderAdd = async (req,res) => {
    res.render('add')
}


exports.AddMovie = async (req,res ) => {

    const {title , director , actors , year , category , image } = req.body
    const data = await axiosAddMovie({title , director , actors , year , category , image : req.file.filename})
    res.redirect('/')
}

  
// ======================= Update and Render Movies =======================
exports.renderUpdate = async (req,res) =>{
    const {id} = req.params

     const movies = await axiosGetSingleMovie(id)
    res.render('update' , {movies : movies.data})

}
exports.UpdateMovie = async (req , res) => {
    console.log('hi from update');

    const {id} = req.params
    const movies = await axiosGetSingleMovie(id)

    const {title , director , actors , year , category  } = req.body
    const result = await  axiosUpdateMovie(  id, {title , director , actors , year , category})
    console.log(result);
    res.status(302).redirect('/')
}
// ======================= View One Movie =======================

exports.RenderMovie = async (req,res) => {
    const {id} = req.params
    const movie = await axiosGetSingleMovie(id)
    res.render('view' , {movie : movie.data})
}
// ======================= Delete Movie =======================
exports.DeleteMovie = async (req,res) => {
    const {id} = req.params
    const result = await  axiosDeleteMovie(id)
    res.status(302).redirect('/')
}

