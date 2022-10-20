import { Express } from 'express'
import * as matchController from '../controllers/match'

const matchEndpoint = '/match'

export function set(app: Express) {
  app.post(matchEndpoint, matchController.create)
}
