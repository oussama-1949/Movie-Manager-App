
const {getSingleMovie} = require('../Helpers/MovieUser')



exports.isAuthor = async(req,res,next) => {

    const {authorId} = req.user
    console.log("from middlewares"+authorId);
   
    const {id} =req.params
    console.log("id from middlewaer "+id);
    const movie = await getSingleMovie(id)
    if (movie.data.authorId !== authorId) return res.status(302).redirect('/')


    next()
    
}