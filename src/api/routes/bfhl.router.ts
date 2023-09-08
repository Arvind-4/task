import { Router } from 'express'
import { bfhlPost, bfhlGet } from '@src/api/services/bfhl.service'

const adminRouter = Router()

adminRouter.post('/bfhl', bfhlPost)
adminRouter.get('/bfhl', bfhlGet)

export default adminRouter
