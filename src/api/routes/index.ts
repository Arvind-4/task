import { Router } from 'express'
import adminRouter from './bfhl.router'

export default (): Router => {
  const router = Router()
  router.use('/', adminRouter)
  return router
}
