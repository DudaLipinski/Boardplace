import ajv from './ajv'
import { JSONSchemaType } from "ajv"
import { User } from './user'

const schema: JSONSchemaType<Pick<User, 'email' | 'password'>> = {
  title: 'auth',
  description: 'Contact and auth information about a user',
  type: "object",
  properties: {
    email: { type: 'string' },
    password: { type: 'string' }
  },
  required: [
    'email',
    'password',
  ],
  additionalProperties: false
}

export default ajv.compile(schema)