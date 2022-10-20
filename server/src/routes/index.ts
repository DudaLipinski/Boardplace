import { Express } from 'express'

import * as userRoutes from './user'
import * as authRoutes from './auth'
import * as matchRoutes from './match'

export const setRoutes = (app: Express) => {
  userRoutes.set(app)
  authRoutes.set(app)
  matchRoutes.set(app)
}
