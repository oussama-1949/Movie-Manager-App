const axios = require('axios')

const api = axios.create({
    baseURL : "http://localhost:3000/users",
    Headers : {
        "Content-type " : "application/json"
    }


})



exports.axiosRegister = (data) => {
    return api.post('/',data)
}

exports.getAllUsers = () => {
    return api.get('/')
}