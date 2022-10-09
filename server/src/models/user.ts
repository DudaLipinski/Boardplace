import { User } from "../database/schemas/user";
import db from '../database'

//  const getByEmail = ()

export const create = (user: User) => {
  const query = `INSERT INTO users(
    firstName,
    lastName,
    age,
    email,
    password
  ) VALUES (?,?,?,?,?)`

  return new Promise((resolve, reject) => {
    db.run(query, [
      user.firstName,
      user.lastName,
      user.age,
      user.email,
      user.password
    ], function(error) {
      if (error) {
        reject(`An error occurred while trying to create an user: ${error?.message}`)
      }

      resolve(this.lastID)
    })
  })
}

export const remove = (auth: Pick<User, 'email' | 'password'>) => {
  const query = `DELETE FROM users
    WHERE email = $email
    AND password = $password
  `

  return new Promise((resolve, reject) => {
    db.run(query, {
      $email: auth.email,
      $password: auth.password,
    }, function(error) {
      if (error) {
        reject(`An error occurred while trying to delete an user: ${error?.message}`)
      }

      resolve(this.changes > 0)
    })
  })
}

export const auth = (auth: Pick<User, 'email' | 'password'>) => {
  const query = `SELECT rowId id, firstName, lastName, age, email
    FROM users
    WHERE email = $email
    AND password = $password
    LIMIT 1
  `

  return new Promise((resolve, reject) => {
    db.get(query, {
      $email: auth.email,
      $password: auth.password
    }, function(error, user) {
      if (error) {
        return reject(`An error occurred while trying to auth: ${error?.message}`)
      }

      resolve(user)
    })
  })
}