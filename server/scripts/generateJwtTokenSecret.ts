import dotenv from 'dotenv'
import crypto from 'crypto'
import fs from 'fs'

const ENV_LOCAL_PATH = '.env.local'
const JWT_TOKEN_SECRET_KEY = 'JWT_TOKEN_SECRET'

const hasEnvLocal = fs.existsSync(ENV_LOCAL_PATH)
if (hasEnvLocal) {
  const envLocalRaw = fs.readFileSync(ENV_LOCAL_PATH).toString()

  const envLocal = dotenv.parse(envLocalRaw)
  if (envLocal[JWT_TOKEN_SECRET_KEY]) {
    process.exit()
  }
}

const token = crypto.randomBytes(64).toString('hex')
fs.appendFileSync(ENV_LOCAL_PATH, `${JWT_TOKEN_SECRET_KEY}=${token}`)
