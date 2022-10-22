import { Express } from 'express'
import * as userController from '../controllers/user'
import * as matchController from '../controllers/match'

const userEndpoint = '/user'

export function set(app: Express) {
  app.post(userEndpoint, userController.create)

  app.delete(userEndpoint, userController.remove)

  app.get(
    `${userEndpoint}/:userId/matches`,
    matchController.getAllByUserParticipant
  )
}
