import axios from 'axios'

export const createMatch = (matchPayload) =>
  axios({
    method: 'post',
    url: 'http://localhost:3007/match',
    data: matchPayload,
  })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      if (err.status === 400) {
        throw new Error('Incorrect match format')
      }
      if (err.status === 500) {
        throw new Error('Unexpected internal error')
      }
      if (err.status !== 200) {
        throw new Error('An error occurred')
      }
    })

export const getMatches = (authorId) =>
  axios({
    method: 'get',
    url: `http://localhost:3007/user/${authorId}/matches`,
  })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      if (err.status === 401) {
        throw new Error('Unauthorized')
      }
      if (err.status === 404) {
        throw new Error('No user found with the given id')
      }
      if (err.status !== 200) {
        throw new Error('An error occurred')
      }
    })

export const getMatch = (matchId) =>
  axios({
    method: 'get',
    url: `http://localhost:3007/match/${matchId}`,
  })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      if (err.status === 401) {
        throw new Error('Unauthorized')
      }
      if (err.status === 404) {
        throw new Error('No user found with the given id')
      }
      if (err.status !== 200) {
        throw new Error('An error occurred')
      }
    })
