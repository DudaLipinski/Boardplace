import db from '../database'

export interface User {
  id: number
  firstName: string
  lastName: string
  age: number
  email: string
  password: string
}

export const create = (user: Omit<User, 'id'>) => {
  const query = `INSERT INTO user(
    firstName,
    lastName,
    age,
    email,
    password
  ) VALUES (?,?,?,?,?)`

  return new Promise((resolve, reject) => {
    db.run(
      query,
      [user.firstName, user.lastName, user.age, user.email, user.password],
      function (error) {
        if (error) {
          reject(
            `An error occurred while trying to create an user: ${error?.message}`
          )
        }

        resolve(this.lastID)
      }
    )
  })
}

export const remove = (auth: Pick<User, 'email' | 'password'>) => {
  const query = `DELETE FROM user
    WHERE email = $email
    AND password = $password
  `

  return new Promise((resolve, reject) => {
    db.run(
      query,
      {
        $email: auth.email,
        $password: auth.password,
      },
      function (error) {
        if (error) {
          reject(
            `An error occurred while trying to delete an user: ${error?.message}`
          )
        }

        resolve(this.changes > 0)
      }
    )
  })
}

export const getByEmail = (email: string) => {
  const query = `SELECT * FROM user
    WHERE email = $email
    LIMIT 1
  `

  return new Promise((resolve, reject) => {
    db.get(
      query,
      {
        $email: email,
      },
      function (error, user) {
        if (error) {
          reject(
            `An error occurred while trying to fetch an user by email: ${error?.message}`
          )
        }

        resolve(user)
      }
    )
  })
}

export const auth = (auth: Pick<User, 'email' | 'password'>) => {
  const query = `SELECT rowId id, firstName, lastName, age, email
    FROM user
    WHERE email = $email
    AND password = $password
    LIMIT 1
  `

  return new Promise((resolve, reject) => {
    db.get(
      query,
      {
        $email: auth.email,
        $password: auth.password,
      },
      function (error, user) {
        if (error) {
          return reject(
            `An error occurred while trying to auth: ${error?.message}`
          )
        }

        resolve(user)
      }
    )
  })
}
