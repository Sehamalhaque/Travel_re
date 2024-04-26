import express from 'express'
import { createTour, deleteTour, getAllTour, getBookTour, getSingleTour, getBookBySearch,  getBookCount, updateTour } from '../Controllers/tourControllers.js'

import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//Create new tour 
router.post('/', verifyAdmin, createTour)

//Update tour 
router.put('/:id', verifyAdmin, updateTour)

//Delete tour 
router.delete('/:id', verifyAdmin, deleteTour)

//Get single tour 
//router.get('/:id', getSingleTour)

//Get all tour 
router.get('/', getAllTour)

//Get tour by search
router.get("/search/getBookBySearch",getBookBySearch)
router.get("/search/getBookTour", getBookTour)
router.get("/search/getBookCount", getBookCount)




export default router