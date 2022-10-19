import { useEffect } from 'react'
import { getMatches } from '../services'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectors as userSelectors,
  actions as userActions,
} from '../state/user'

export const useMatches = (userId) => {
  const dispatch = useDispatch()

  const matches = useSelector(userSelectors.getUserMatches)

  const loadMatches = async () => {
    const loadedMatches = await getMatches(userId)
    dispatch(userActions.setMatches(loadedMatches))
  }

  useEffect(() => {
    if (matches?.length) {
      return
    }

    loadMatches()
  }, [])

  return matches
}
