import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import routes from '@src/api/routes'

export default ({ app }: { app: express.Application }): void => {
  app.use(helmet())
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/', routes())
}
