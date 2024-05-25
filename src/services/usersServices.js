const {Users} = require("../../database/models")

const productsServices = {
    findUserEmail: (email) => {
        return Users.findOne({
            where: {email: email}
        })
    },

    createUser: (newUser) => {
        return Users.create({
            id: newUser.id,
            name: newUser.name,
            last_name: newUser.lastName,
            email: newUser.email,
            password: newUser.password,
            profile_picture: newUser.profile_picture,
            rank: newUser.rank,
        })
    },

    updateUser: (user, userId) => {
        return Users.update({
            name: user.name,
            last_name: user.last_name,
            email: user.email
        }, {
            where: {id: userId}
        })
    }
}

module.exports = productsServices