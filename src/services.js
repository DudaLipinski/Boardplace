import { matches } from './__mocks__/matches'

export const createUser = (user) => {
  return fetch('http://localhost:3007/user', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.status === 409) {
        throw new Error('User already exists')
      }

      if (response.status !== 200) {
        throw new Error('An error occurred')
      }

      return response.json()
    })
    .catch((error) => console.error(error.message))
}

export const authUser = (login) => {
  return fetch('http://localhost:3007/auth', {
    method: 'POST',
    body: JSON.stringify(login),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (response.status === 401) {
      throw new Error("Provided credentials doesn't match any valid user")
    }

    if (response.status !== 200) {
      throw new Error('An error occurred')
    }

    return response.json()
  })
}

export const getMatches = (userId) => {
  const items = matches.filter((item) => item.authorId == userId)
  return items
  // const res = await fetch(`http://localhost:3007/user/${id}/matches`, {
  //   method: 'POST',
  //   body: JSON.stringify(id),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
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

export const getMatch = async (matchId) => {
  const res = await fetch(`http://localhost:3007/match/${matchId}`, {
    method: 'POST',
    body: JSON.stringify(matchId),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (response.status === 404) {
      throw new Error('No match was found with the provided id')
    }

    if (response.status !== 200) {
      throw new Error('An error occurred')
    }

    return res.json()
  })
}
