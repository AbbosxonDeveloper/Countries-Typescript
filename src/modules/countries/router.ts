import { Router } from "express";
import controller from "./controller";

export default Router()
.get('/countries', controller.Get)
.post('/countries/post', controller.Post)
.put('/countries/change/:_id', controller.Put)
.delete('/countries/delete/:_id', controller.Delete)