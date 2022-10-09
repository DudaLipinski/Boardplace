import { RequestHandler } from "express";
import validateAuth from "../database/schemas/auth";

import * as userModel from '../models/user'

export const auth: RequestHandler = async (req, res) => {
  const auth = req.body
  if (!auth) {
    return res.status(400).send('You must provide an email and password')
  }

  const validAuth = validateAuth(auth)
  if (!validAuth) {
    console.error(validateAuth.errors)
    res.status(400).send('Invalid email and/or password')
    return
  }

  try {
    const loggedUser = await userModel.auth(auth)
    if (!loggedUser) {
      return res.status(401).send()
    }

    res.status(200).send(loggedUser)
  } catch (e) {
    res.status(500).send()
  }
}

