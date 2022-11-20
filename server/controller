const User = require('../model/user');

//login
const findUsers = async(req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    }
    catch(error) {
        console.log(error);
    }
}

const createUser = async(req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }, {collection: 'user-data'});
        res.status(200).json({msg: 'user created!'});
    }
    catch(error) {
        res.status(400).json({msg: 'user NOT created!'})
    }
}

const deleteUser = async(req, res) => {
    try {
        const user = await User.findOneAndDelete({_id:req.params.id});
        res.status(200).json({msg: `user with id: ${req.body.id} was deleted`});

    }
    catch(error) {
        res.status(400).json({msg: 'some shit went wrong'});
    }
}

module.exports = {
    findUsers,
    createUser,
    deleteUser
}
