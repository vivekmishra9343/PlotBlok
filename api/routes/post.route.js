import express from 'express';
const router =express.Router();
router.get("/test", (req, res)=>{
console.log("router is working")
})

export default router