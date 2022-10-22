import db from '../database'

export interface MatchParticipant {
  id: string
  matchId: string
  // userId?: string;
  // unregisteredFriendId?: string;
  fullName: string
  score: number
}

// TODO: study splitting the query into multiple ones
export const createMultiple = ({
  matchId,
  participants,
}: {
  matchId: number
  participants: Omit<MatchParticipant, 'id' | 'matchId'>[]
}) => {
  const valuesPlaceholders = participants.map(() => `(?, ?, ?)`).join(', ')
  const query = `INSERT INTO matchParticipant(
    matchId,
    fullName,
    score
  ) VALUES ${valuesPlaceholders}`

  const values: Array<string | number> = []
  participants.forEach(({ fullName, score }) => {
    values.push(matchId)
    values.push(fullName)
    values.push(score)
  })

  return new Promise<void>((resolve, reject) => {
    db.run(query, values, function (error) {
      if (error) {
        reject(
          `An error occurred while creating multiple match participants: ${error?.message}`
        )
      }
    })

    console.log('--- PARTICIPANTS CREATED')
    console.log(JSON.stringify(participants, null, 2))

    resolve()
  })
}
