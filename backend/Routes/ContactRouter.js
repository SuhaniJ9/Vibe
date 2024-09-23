const express = require('express');
const router = express.Router();
const Model = require('../Models/ContactModel')

router.post('/add', async (req, res) => {
    console.log(req.body)
    new Model(req.body).save()
        .then(() => {
            res.status(200).send('Feedback Stored')
        })
        .catch((err) => {
            res.status(500).send('Feedback not stored')
        })
    });
    router.get('/getall', (req, res) => {
        Model.find()
            .then((result) => {
                res.status(200).json(result);
            }).catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    });
    router.delete('/delete/:id', (req, res) => {
        Model.findByIdAndDelete(req.params.id)
            .then((result) => {
                res.status(200).json(result);
            }).catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    });

module.exports = router;
