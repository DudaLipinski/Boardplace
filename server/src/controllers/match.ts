import { RequestHandler } from 'express'
import omit from 'lodash.omit'
import * as matchModel from '../models/match'
import * as matchParticipantModel from '../models/matchParticipant'

import { validateMatchCreationSchema } from '../schemas/match'
import { getErrorMessage } from '../schemas/utils'

export const create: RequestHandler = async (req, res) => {
  const matchDTO = req.body
  if (!matchDTO) {
    return res.status(400).send()
  }

  const validMatch = validateMatchCreationSchema(matchDTO)
  if (!validMatch) {
    const errorMessage = getErrorMessage(validateMatchCreationSchema)

    res.status(400).send({ message: errorMessage })
    return
  }

  const match = omit(matchDTO, ['participants'])
  const { participants } = matchDTO

  try {
    const matchId = await matchModel.create(match)

    await matchParticipantModel.createMultiple({ matchId, participants })
  } catch (e: any) {
    res.status(500).send('Internal error')
  }

  res.send(200)
}
