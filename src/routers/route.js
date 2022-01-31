const express = require("express")
const router = new express.Router()

const MensRanking = require("../models/schema")

// Creating Record
router.post("/Ranking",async(req,res)=>{
    try {
        const addRecord = new MensRanking(req.body)
        const insertRecord = await addRecord.save()
        res.status(201).send(insertRecord)
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get("/Ranking",async(req,res)=>{
    try {
       const getRecord = await MensRanking.find({}).sort({"ranking":1})
        res.status(201).send(getRecord)
    } catch (e) {
        res.status(400).send(e);
    }
})

// Get single
router.get("/Ranking/:id",async(req,res)=>{
    try {
        const _id = req.params.id
       const getRecordSingle = await MensRanking.findById({_id})
        res.status(201).send(getRecordSingle)
    } catch (e) {
        res.status(400).send(e);
    }
})

// Update
router.patch("/Ranking/:id",async(req,res)=>{
    try {
        const _id = req.params.id
       const getRecordSingle = await MensRanking.findByIdAndUpdate(_id,req.body,{
           new:true
       })
        res.status(201).send(getRecordSingle)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete("/Ranking/:id",async(req,res)=>{
    try {
        const getRecordSingle = await MensRanking.findByIdAndRemove(req.params.id)
         res.status(201).send(getRecordSingle)
    } catch (e) {
        res.status.length(400).send(e)
    }
})

module.exports = router