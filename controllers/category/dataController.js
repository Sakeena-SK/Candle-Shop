const Categories = require('../../models/category.js');

const dataController = {}

dataController.index = async (req, res, next) => {
   try {
    const user = await req.user.populate('category')
    res.locals.data.category = user.category
    next()
   } catch(error) {
    res.status(400).send({ message: error.message })
  }
}
dataController.destroy = async (req, res, next) => {
    try {
        await Fruit.findOneAndDelete({'_id': req.params.id}).then(() => {
            next()
        })
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}
dataController.update = async (req, res, next) => {
    if (req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else if (req.body.readyToEat !== true) {
        req.body.readyToEat = false;
    }
    try {
        res.locals.data.fruit = await Fruit.findByIdAndUpdate(req.params.id, req.body, {new: true})
        next()
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}

dataController.create = async (req, res, next) => {
    if (req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else if (req.body.readyToEat !== true) {
        req.body.readyToEat = false;
    }
    try {
        res.locals.data.fruit = await Fruit.create(req.body)
        req.user.category.addToSet({_id: res.locals.data.fruit._id})
        await req.user.save()
        next()
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}

dataController.show = async (req,res,next) => {
    try {
        res.locals.data.fruit = await Fruit.findById(req.params.id)
        if (!res.locals.data.fruit) {
            throw new error(`could not locate a fruit with the id ${req.params.id}`)
        }
        next()
    } catch(error) {
        res.status(400).send({ message: error.message })
    }
}

module.exports = dataController