import React from 'react'
import { columns, data } from './ColumnsMatchList'
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
        dataSource={matches}
      />
    </>
  )
}
