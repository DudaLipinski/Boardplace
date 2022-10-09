import sqlite3 from 'sqlite3'

const sqlite3Cli = sqlite3.verbose()

export default new sqlite3Cli.Database('./database.db', (error) => {
  if (error) {
    console.error(error)
  }

  console.log('Connected to database');
});