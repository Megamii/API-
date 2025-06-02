//controller handles your api requests i.e crud
import express, {Request, Response } from 'express'
import { users } from '../storage/data'
//create an class Users, then define crud within it
export default class Users {
    create (req: Request, res: Response): any {
     
        const {name, career} = req.body
        if (!name || !career) res.send(!name ? "Invalid name" : "Invalid Career" )
    
        users.push({name, career, id: users.length + 1})
        return res.json({
            status: 200,
            message:'added a new user successfully',
            data: users
    })
    }

    update (req:Request, res: Response): any  {
        const { id } = req.params
        if(!id) res.json({status:400, message: ' Invalid ID identifier'})
        const { name } = req.body
        users[Number (id) - 1].name = name  //you can also use +id i.e add plus to what you need to convert to number or put number in front
        return res.json({ 
            status: 200,
            data: users
        })
    }

    read (req:Request, res:Response) : any {
        const {name} = req.query
        return res.json({
            status: 200,
            message: "success",
            data: name ? 
                users.filter((user) => user.name.trim().toLowerCase()=== String (name).trim().toLowerCase()):
                users
    
        })
    }

    deleteUsers (req: Request, res: Response) : any {
       const {id} = req.params
       if (!id) res.json({status: 400, message:'Invalid identifier'})
        return res.json({
            status: 200,
            message:'user deleted successfully',
            data: users.filter((user) => user.id !== Number(id))
        })
    }
}