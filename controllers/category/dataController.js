const Category = require('../../models/category.js');

const dataController = {}

dataController.index = async (req, res, next) => {
   try {
    const user = await req.user
    res.locals.data.category = user.category
    next()
   } catch(error) {
    res.status(400).send({ message: error.message })
  }
}
dataController.destroy = async (req, res, next) => {
    try {
        await Category.findOneAndDelete({'_id': req.params.id}).then(() => {
            next()
        })
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}
dataController.update = async (req, res, next) => {
    try {
        res.locals.data.category = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true})
        next()
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}

dataController.create = async (req, res, next) => {
    try {
        res.locals.data.category = await Category.create(req.body)
        req.user.category.addToSet({_id: res.locals.data.category._id})
        await req.user.save()
        next()
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}

dataController.show = async (req,res,next) => {
    try {
        res.locals.data.category = await Category.findById(req.params.id)
        if (!res.locals.data.category) {
            throw new error(`could not locate a category with the id ${req.params.id}`)
        }
        next()
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}

module.exports = dataController