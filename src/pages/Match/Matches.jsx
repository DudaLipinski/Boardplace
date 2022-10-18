import React from 'react'
import { columns, data, expandedRowRender } from './DataMatch'
import { Table, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

export const Matches = () => {
  const navigate = useNavigate()

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
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ['0'],
        }}
        dataSource={data}
      />
    </>
  )
}
