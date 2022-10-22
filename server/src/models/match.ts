import omit from 'lodash.omit'

import db from '../database'

export interface Match {
  id: string
  authorId: string
  boardgameName: string
  date?: string
  duration?: number
  notes?: string
}

interface DigestedParticipant {
  fullName: string
  score: number
}

interface DigestedMatch extends Match {
  participants: DigestedParticipant[]
}

export const create = (match: Omit<Match, 'id'>) => {
  const query = `INSERT INTO match(
    authorId,
    boardgameName,
    date,
    duration,
    notes
  ) VALUES (?, ?, ?, ?, ?)`
  const values = [
    match.authorId,
    match.boardgameName,
    match.date,
    match.duration,
    match.notes,
  ]

  return new Promise<number>((resolve, reject) => {
    db.run(query, values, function (error) {
      if (error) {
        reject(
          `An error occurred while creating multiple match participants: ${error?.message}`
        )
      }

      resolve(this.lastID)
    })
  })
}

interface MatchWithParticipantsData extends Match {
  participantsFullNames: string
  participantsScores: string
}

const digestMatchParticipants = (match: MatchWithParticipantsData) => {
  if (!match.participantsFullNames) {
    return []
  }

  const participantsFullNames = `"${match.participantsFullNames}"`
    .split(',')
    .map((name) => name.slice(1, -1))
  const participantsScores = match.participantsScores.split(',')

  const participants: DigestedParticipant[] = []
  for (let i = 0; i < participantsFullNames.length; i++) {
    const fullName = participantsFullNames[i]
    const score = Number(participantsScores[i])

    participants.push({ fullName, score })
  }

  return participants
}

export const getAllByAuthor = ({ authorId }: { authorId: string }) => {
  const query = `SELECT
      m.*,
      m.rowid as id,
      group_concat(mp.fullName, '","') as participantsFullNames,
      group_concat(mp.score) as participantsScores
    FROM
      \`match\` m
    JOIN matchParticipant mp
      ON m.rowid = mp.matchId
    WHERE
      m.authorId = $authorId
    group by m.rowid;
  `

  return new Promise<DigestedMatch[]>((resolve, reject) => {
    db.all(
      query,
      { $authorId: authorId },
      function (error, matches: MatchWithParticipantsData[]) {
        if (error) {
          reject(
            `An error occurred while trying to fetch matches by authorId: ${error?.message}`
          )
        }

        const digestedMatches = matches.map((match) => {
          const participants = digestMatchParticipants(match)

          return {
            ...omit(match, ['participantsFullNames', 'participantsScores']),
            participants,
          }
        })

        resolve(digestedMatches)
      }
    )
  })
}
