import { Express } from 'express'
import * as userController from '../controllers/user'

const userEndpoint = '/user';

export function set(app: Express) {
  app.post(userEndpoint, userController.create);
  app.delete(userEndpoint, userController.remove);
};
