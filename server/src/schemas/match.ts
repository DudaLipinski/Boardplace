import ajv from './ajv'
import { JSONSchemaType } from 'ajv'
import { MatchParticipant } from '../models/matchParticipant'
import { Match } from '../models/match'

export interface MatchResponseDTO extends Match {
  participants: Omit<MatchParticipant, 'matchId'>[]
}

export type MatchCreationData = Omit<Match, 'id'>

export type MatchCreationParticipantData = Omit<
  MatchParticipant,
  'id' | 'matchId'
>

export interface MatchCreationDTO extends MatchCreationData {
  participants: MatchCreationParticipantData[]
}

const matchCreationSchema: JSONSchemaType<MatchCreationDTO> = {
  title: 'Match',
  description: 'Match data with its participants',
  type: 'object',
  properties: {
    authorId: { type: 'string' },
    boardgameName: { type: 'string' },
    date: { type: 'string', nullable: true },
    duration: { type: 'number', nullable: true },
    notes: { type: 'string', nullable: true },
    participants: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          fullName: { type: 'string' },
          score: { type: 'number' },
        },
        required: ['fullName', 'score'],
      },
    },
  },
  required: ['authorId', 'boardgameName', 'participants'],
  additionalProperties: false,
}
export const validateMatchCreationSchema = ajv.compile(matchCreationSchema)