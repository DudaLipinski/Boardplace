import db from '../database'

export interface Match {
  id: string
  authorId: string
  boardgameName: string
  date?: string
  duration?: number
  notes?: string
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
