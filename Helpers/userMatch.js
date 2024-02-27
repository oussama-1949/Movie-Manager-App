const {getAllUsers} = require('../Api/ApiUsers')
const {comparedPassword} = require('../Helpers/hashing')



const User = {
    findUser:async(email) => {
        const users = await getAllUsers();
        return users.data.find(user => user.email === email)
    },
    matchedPassword : async(password , userpassword) => {
        return comparedPassword(password , userpassword)
    }
}

module.exports = User