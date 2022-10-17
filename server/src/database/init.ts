import db from '.'
import fs from 'fs'
import path from 'path'

const initSql = fs.readFileSync(path.resolve('./src/database/init.sql')).toString() // TODO: fix this path

db.run(initSql)
