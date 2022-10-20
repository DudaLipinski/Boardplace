import React from 'react'
import {
  columns,
  showButtonViewMatch,
} from '../../components/Match/ColumnsMatchList'
// import { expandedRowRender } from './ExpandedMatch'
import { Table, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useMatches } from '../../hooks/useMatches'
import { useSelector } from 'react-redux'
import { selectors as userSelectors } from '../../state/user'

export const MatchList = () => {
  const navigate = useNavigate()
  const userId = useSelector(userSelectors.getUserId)

  const matches = useMatches(userId)

  const matchItems = matches?.map((item) => {
    const winner = item.participants.find((item) => item.isWinner)

    const actionColumn = columns.find((item) => item.title === 'Action')
    actionColumn.render = () => showButtonViewMatch(item.id)

    return {
      boardgameName: item.boardgameName,
      winner: winner.fullName,
      date: item.date,
      duration: item.duration,
    }
  })

  return (
    <>
      <Button
        type="primary"
        onClick={() => navigate('/match')}
        style={{ marginBottom: 30, float: 'right' }}
      >
        Add Match
      </Button>
      <Table
        columns={columns}
        // expandable={{
        //   expandedRowRender,
        // }}
        dataSource={matchItems}
      />
    </>
  )
}
