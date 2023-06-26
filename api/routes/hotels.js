import express  from "express";
import Hotel from "../models/Hotel.js";
const router =express.Router();


router.get("/main", (req,res)=>{
    res.send("hello this is hotel")
})
//create
router.post("/", async (req, res)=>{
 const newHotel = new Hotel(req.body)
 
 
try{
 const savedHotel =  await newHotel.save()
 res.status(200).json(savedHotel)
 }catch(err){
    res.status(500).json(err)
 }
})
//update
router.put("/:id", async (req,res)=>{

    try{
        const updateHotel =  await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new : true});
        res.status(200).json(updateHotel)
        }catch(err){
           res.status(500).json(err)
        }
})
//delete
router.delete("/:id", async (req,res)=>{

    try{
         await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("hotel has been deleted")
        }catch(err){
           res.status(500).json(err)
        }
})
//get
//get all



export default router;