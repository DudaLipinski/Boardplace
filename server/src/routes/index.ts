import { Express } from 'express'
import * as userRoutes from './user'
import * as authRoutes from './auth'

export const setRoutes = (app: Express) => {
  userRoutes.set(app);
  authRoutes.set(app);
  // add more routes here
}