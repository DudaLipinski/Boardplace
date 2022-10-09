import { RequestHandler } from "express";
import omit from 'lodash.omit'

import validateUser from "../database/schemas/user";
import validateAuth from "../database/schemas/auth";
import * as userModel from '../models/user'

export const create: RequestHandler = async (req, res) => {
  const user = req.body
  if (!user) {
    return res.status(400).send('bla')
  }

  user.age = user.age ? parseInt(user.age) : user.age

  const validUser = validateUser(user)
  if (!validUser) {
    const errorMessage = validateUser.errors ?
      validateUser.errors
        .map(({ message }) => message)
        .join(', ')
      : 'Invalid format'

    res.status(400).send({ message: errorMessage })
    return
  }

  try {
    const userWithSameEmail = await userModel.getByEmail(user.email)
    if (userWithSameEmail) {
      return res.status(409).send('There\'s already a user registered with this email')
    }

    const id = await userModel.create(user)
    res.status(200).send({
      id,
      ...omit(user, 'password'),
    })
  } catch (e) {
    res.status(500).send('Internal error')
  }
}

export const remove: RequestHandler = async (req, res) => {
  const auth = req.body
  if (!auth) {
    return res.status(400)
  }

  const validAuth = validateAuth(auth)
  if (!validAuth) {
    console.error(validateAuth.errors)
    res.status(400)
    return
  }

  try {
    const deleted = await userModel.remove(auth)
    if (!deleted) {
      return res.status(404).send()
    }

    res.status(200).send()
  } catch (e) {
    res.status(500).send()
  }
}
