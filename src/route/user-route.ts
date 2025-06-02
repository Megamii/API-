//we are organizing our code 
//this file contains all routes e.g /users
import express, { Router, Request, Response } from 'express'
//or import express from 'express'

const router: Router= express.Router()
import { users } from '../storage/data'


import Users from '../controller/user-controller'

//import { create } from 'domain'
const userController = new Users()

const {create, read, update, deleteUsers} = new Users()
router.post('', create)

router.get('', read)

router.patch('/:id', update)

router.delete('/:id', deleteUsers )


    

export default router

