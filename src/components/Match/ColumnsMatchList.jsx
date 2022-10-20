import { Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export const showButtonViewMatch = (matchId) => {
  return (
    <Space size="middle">
      <Link to={`/match/${matchId}`}>View</Link>
    </Space>
  )
}

export const columns = [
  {
    title: 'Boargame',
    dataIndex: 'boardgameName',
    key: 'boardgameName',
  },
  {
    title: 'Winner',
    dataIndex: 'winner',
    key: 'winner',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: 0,
  },
]
