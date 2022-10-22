import { matches } from './__mocks__/matches'

export const createUser = async (user) => {
  try {
    const response = await fetch('http://localhost:3007/user', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (response.status === 409) {
      throw new Error('User already exists')
    }

    if (response.status !== 200) {
      throw new Error('An error occurred')
    }
    return await response.json()
  } catch (error) {
    return console.error(error.message)
  }
}

export const authUser = async (login) => {
  const response = await fetch('http://localhost:3007/auth', {
    method: 'POST',
    body: JSON.stringify(login),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (response.status === 401) {
    throw new Error("Provided credentials doesn't match any valid user")
  }
  if (response.status !== 200) {
    throw new Error('An error occurred')
  }
  return await response.json()
}

export const createMatch = async (match) => {
  try {
    const { authorId } = match
    match = { ...match, authorId: String(authorId) }

    const response = await fetch('http://localhost:3007/match', {
      method: 'POST',
      body: JSON.stringify(match),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.status === 400) {
      throw new Error('Incorrect match format')
    }

    if (response.status !== 200) {
      throw new Error('An error occurred')
    }

    return await response.json()
  } catch (error) {
    return console.error(error.message)
  }
}

export const getMatches = (userId) => {
  const items = matches.filter((item) => item.authorId === userId)
  return items
  // const res = await fetch(`http://localhost:3007/user/${id}/matches`, {
  //   method: 'GET',
  // }).then((response) => {
  //   if (response.status === 404) {
  //     throw new Error('No user found with the given id')
  //   }
  //   if (response.status !== 200) {
  //     throw new Error('An error occurred')
  //   }

  //   return res.json()
  // })
}

export const getMatch = (matchId) => {
  const match = matches.find((item) => item.id === Number(matchId))
  return match
  // const res = await fetch(`http://localhost:3007/match/${matchId}`, {
  //   method: 'GET',
  // }).then((response) => {
  //   if (response.status === 404) {
  //     throw new Error('No match was found with the provided id')
  //   }
  //   if (response.status !== 200) {
  //     throw new Error('An error occurred')
  //   }
  //   return res.json()
  // })
}
