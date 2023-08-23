const express = require('express')
const router = express.Router()
const { Business  } = require('../models')
const { authenticate } = require("../middleware");
const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    address: Joi.string()
        .min(0)
        .max(150),

})

router.get('/', [authenticate.isModerator], async (req, res) => {
    console.log('index')
    res.send(Business.findAll());
})

router.post('/new', [authenticate.isModerator], async (req, res) => {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}
    try{
        const business = await Business.create(req.body);
        res.send(business)
    }catch (err){
        res.send(err);
    }
})

router.get("/:id", [authenticate.isModerator], async function(req, res) {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}
    try{
        const business = await Business.findByPk(req.params.id);
        if (business === null) {
            res.send('Not found!');
        } else {
            res.send(business);
        }
    }catch (err){
        res.send(err);
    }
 });
router.put("/:id", [authenticate.isModerator], async function(req, res) {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}

    try {
        const business = await Business.findByPk(req.params.id);
        if (business === null) {
            res.send('Not found!');
        } else {
            try {
                business.set({
                    name: req.body.name,
                    address: req.body.address
                });
                await business.save();

                res.send(business);
            } catch (err){
                res.send(err);
            }
        }
    } catch (err){
        res.send(err);
    }
});
router.delete("/:id",[authenticate.isModerator],async function(req, res) {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}
    try {
        const business = await Business.findByPk(req.params.id);
        if (business === null) {
            res.send('Not found!');
        } else {
            try {
                business.set({
                    name: req.body.name,
                    address: req.body.address
                });
                await business.destroy();

                res.send("Uspesno izbrisano!");
            } catch (err){
                res.send(err);
            }
        }
    } catch (err){
        res.send(err);
    }
});


module.exports = router