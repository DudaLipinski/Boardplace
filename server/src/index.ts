import dotenv from 'dotenv'
import ipfilter from 'express-ipfilter'
import express from 'express'
import pino from 'express-pino-logger'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import yaml from 'yamljs'

const swaggerDocument = yaml.load('./swagger.yaml')

import db from './database'
import { setRoutes } from './routes'

dotenv.config({ path: '.env.local' })

const app = express()

app.use(cors())
app.options('*', cors())

app.use(express.json())

app.use(ipfilter.IpFilter(['127.0.0.1']))

app.use(pino())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

setRoutes(app)

const port = process.env.PORT
app.listen(port, () =>
  console.log(`Express server is running on localhost:${port}`)
)

process.on('exit', () => db.close())
