import { NextFunction, Request, Response } from "express";
import usersSchema from "../schemas/usersSchema.js";


export default async function verifyUser(req: Request, res: Response, next: NextFunction) {

    const { error } = usersSchema.validate(req.body, { abortEarly: false })
    if (error) return res.status(422).send(error.details.map((detail: any) => detail.message))
    next()
}