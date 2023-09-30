import express  from "express";

import { addUser, getUsers, getUser, deleteUser, editUser } from "../controller/user.controller.js";
//import { editUser } from "../../my-app/src/Servers/Api.js";
//import { deleteUser } from "../../my-app/src/Servers/Api.js";
//import { getUsers } from "../../my-app/src/Servers/Api.js";
const router =express.Router();

router.post('/add',addUser);
router.get('/all',getUsers);
router.get('/:id',getUser);
router.post('/:id',editUser)

router.delete('/:id', deleteUser);

export default router;