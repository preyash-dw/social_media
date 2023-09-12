import express from "express";

import {getrelationship, addrelationship,deleterelationship} from "../controllers/relationship.js"


const router=express.Router();

router.get("/",getrelationship);
router.post("/",addrelationship);
router.delete("/",deleterelationship);

export default router;