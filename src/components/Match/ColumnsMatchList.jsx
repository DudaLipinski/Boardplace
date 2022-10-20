import { Space } from 'antd'
import React from 'react'

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
    dataIndex: '',
    key: 'x',
    render: () => (
      <Space size="middle">
        <a>View</a>
      </Space>
    ),
  },
]
