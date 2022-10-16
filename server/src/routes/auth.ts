import { Express } from 'express'
import * as authController from '../controllers/auth'

const authEndpoint = '/auth'

export function set(app: Express) {
  app.post(authEndpoint, authController.auth)
}
