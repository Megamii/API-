import express from 'express'
import user from './user-route'

const routes = express.Router()
routes.use('/users', user)

export default routes