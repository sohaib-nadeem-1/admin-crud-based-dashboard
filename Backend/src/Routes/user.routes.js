
import {createUser, deleteuser, getUserById, getUsers, updateUser} from "../Controllers/user.controller.js";
import express from "express"
const router = express.Router()

router.get("/user",getUsers)
router.post("/user",createUser)
router.get("/user/:id",getUserById)
router.patch("/user/:id",updateUser)
router.delete("/user/:id",deleteuser)

export default router;