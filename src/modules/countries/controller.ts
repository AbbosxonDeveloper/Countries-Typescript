import { Request, Response, NextFunction } from "express";
import model from "./model";

export default {
    Get: async(req:Request, res:Response,next:NextFunction):Promise<void> => {
        try {
            const countries = await model.find()
            res.send(countries)
        } catch (error: unknown) {
            next(error)
        }
    },
    Post:async(req:Request, res:Response,next:NextFunction):Promise<void> => {
        try {
            
            const newCountry =  new model(req.body)
            .catch((err) => {throw new Error(err)})
            if(!newCountry){
                throw new Error('post error')
            }
            res.status(201).send({
                status:201,
                message: "Created",
                data: await newCountry.save()
            })
        } catch (error: unknown) {
            next(error)
        }
    },
    Put: async(req: Request, res: Response, next:NextFunction):Promise<void>=> {
        try {
            const {_id} = req.params
            const {title, capital, population, area, created} = req.body
            const updateCountry = model.updateMany({_id: _id}, {title, capital, population, area, created})
            .catch((err) => {throw new Error(err)})
            if(!updateCountry){
                throw new Error('post error')
            }
            res.status(201).send({
                status:201,
                message: "Updated",
                data: {title, capital, population, area, created}
            })
        } catch (error: unknown) {
            next(error)
        }
    },
    Delete: async(req: Request, res: Response, next:NextFunction):Promise<void>=> {
        try {
            const {_id} = req.params
            const deleteCountry = model.deleteOne({_id: _id})
            .catch((err) => {throw new Error(err)})
            if(!deleteCountry){
                throw new Error('post error')
            }
            res.status(201).send({
                status:201,
                message: "Deleted"
            })
        } catch (error: unknown) {
            next(error)
        }
    }
}