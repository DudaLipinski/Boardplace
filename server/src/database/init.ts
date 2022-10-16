import db from './index'

const createUsersTable = `
  CREATE TABLE IF NOT EXISTS users (
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    age INTEGER NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
  );
`

db.run(createUsersTable)
