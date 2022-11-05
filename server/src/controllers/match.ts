import { RequestHandler } from 'express'
import omit from 'lodash.omit'
import * as matchModel from '../models/match'
import * as matchParticipantModel from '../models/matchParticipant'

import { MatchCreationDTO, validateMatchCreationSchema } from '../schemas/match'
import { getErrorMessage } from '../schemas/utils'

export const create: RequestHandler = async (req, res) => {
  const matchDTO = req.body as MatchCreationDTO
  if (!matchDTO) {
    return res.status(400).send()
  }

  const authorId = req.userId
  const matchDTOWithAuthorId = {
    ...matchDTO,
    authorId,
  }

  const validMatch = validateMatchCreationSchema(matchDTOWithAuthorId)
  if (!validMatch) {
    const errorMessage = getErrorMessage(validateMatchCreationSchema)

    res.status(400).send({ message: errorMessage })
    return
  }

  const match = omit(matchDTOWithAuthorId, ['participants'])
  const { participants } = matchDTO

  try {
    const matchId = await matchModel.create(match)

    await matchParticipantModel.createMultiple({ matchId, participants })
  } catch (e: any) {
    res.status(500).send('Internal error')
  }

  res.send(200)
}

export const getAllByUserParticipant: RequestHandler = async (req, res) => {
  const { userId } = req.params
  if (!userId) {
    return res.status(400).send()
  }

  try {
    const matches = await matchModel.getAllByAuthor({ authorId: userId })
    res.status(200).send(matches)
  } catch (e: any) {
    res.status(500).send('Internal error')
  }
}

export const getById: RequestHandler = async (req, res) => {
  const { matchId } = req.params
  if (!matchId) {
    return res.status(400).send()
  }

  try {
    const match = await matchModel.getById({ id: matchId })
    if (!match) {
      return res.status(404).send('Match not found')
    }

    res.status(200).send(match)
  } catch (e: any) {
    res.status(500).send('Internal error')
  }
}
