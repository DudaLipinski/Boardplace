import ajv from './ajv'
import { JSONSchemaType } from "ajv"

export interface User {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
}

const schema: JSONSchemaType<User> = {
  title: 'User',
  description: 'Contact and auth information about a user',
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: {type: "string" },
    age: { type: 'integer', minimum: 1, maximum: 120 },
    email: { type: 'string' },
    password: { type: 'string' }
  },
  required: [
    'firstName',
    'lastName',
    'age',
    'email',
    'password',
  ],
  additionalProperties: false
}

export default ajv.compile(schema)