import { Table, Space } from 'antd'
import React from 'react'

export const columns = [
  {
    title: 'Boargame',
    dataIndex: 'boardgame',
    key: 'boardgame',
  },
  {
    title: 'Player',
    dataIndex: 'player',
    key: 'player',
  },
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
]

export const data = [
  {
    boardgame: 'Catan',
    player: 'Maria Eduarda',
    score: '46',
    date: '20/20/2002',
    time: '3h23',
    description:
      'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
]

export const expandedRowRender = () => {
  const columns = [
    {
      title: 'Player',
      dataIndex: 'player',
      key: 'player',
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
    },
  ]
  const data = [
    {
      player: 'Leo',
      score: '30',
    },
    {
      player: 'Kresh',
      score: '30',
    },
    {
      player: 'Gui',
      score: '30',
    },
  ]

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      showHeader={false}
    />
  )
}
