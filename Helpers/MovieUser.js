const {axiosGetSingleMovie} = require('../Api/ApiMovies')


const Movie = { 
    getSingleMovie: async(id) =>{

        return await axiosGetSingleMovie(id)
    }
}

module.exports = Movie