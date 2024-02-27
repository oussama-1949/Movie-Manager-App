const axios = require('axios')

const api = axios.create({
    baseURL : "http://localhost:3000/movies",
    Headers : {
        "Content-type " : "application/json"
    }


})


exports.axiosGetMovies = () => {
    return api.get('/')
}
exports.axiosAddMovie = (data) => {
    return api.post('/' , data)
}
exports.axiosUpdateMovie =  (id , data) => {
    return api.put(`/${id}`, data )
}
exports.axiosGetSingleMovie = (id) => {
    return api.get(`/${id}`)
}
exports.axiosDeleteMovie = (id) => {
    return api.delete(`/${id}`)
}

exports.axiosUploadImage = (data) => {
    return api.post('/' , data)
}