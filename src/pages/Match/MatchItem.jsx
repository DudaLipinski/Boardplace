import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  MinusCircleOutlined,
  PlusOutlined,
  SmileOutlined,
} from '@ant-design/icons'
import { getMatch, createMatch } from '../../services'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { selectors as userSelectors } from '../../state/user'
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Space,
  DatePicker,
  Typography,
  InputNumber,
  Result,
} from 'antd'

const { TextArea } = Input
const { Title } = Typography

const Participants = ({ fields, add, remove }) => {
  return (
    <>
      {fields.map(({ key, name, ...restField }, index) => {
        return (
          <Space
            key={key}
            style={{
              display: 'flex',
              marginBottom: 25,
              alignItems: 'center',
            }}
            className="hello"
            align="baseline"
          >
            <Form.Item
              {...restField}
              name={[name, 'fullName']}
              label="Player's name"
              style={{ marginBottom: 0 }}
              rules={[
                {
                  required: true,
                  message: "Missing player's name",
                },
              ]}
            >
              <Input placeholder="Player's name" />
            </Form.Item>
            <Form.Item
              {...restField}
              name={[name, 'score']}
              label="Score"
              style={{ marginBottom: 0 }}
              rules={[
                {
                  required: true,
                  message: 'Missing score',
                },
              ]}
            >
              <InputNumber placeholder="Score" />
            </Form.Item>
            <MinusCircleOutlined onClick={() => remove(index)} />
          </Space>
        )
      })}
      <Form.Item>
        <Button
          type="dashed"
          onClick={() => add()}
          block
          icon={<PlusOutlined />}
        >
          Add player
        </Button>
      </Form.Item>
    </>
  )
}

export const MatchItem = () => {
  const { id } = useSelector(userSelectors.getUser)
  // const { matchId } = useParams()
  // const [match, setMatch] = useState()

  // const loadMatch = async () => {
  //   const matchFounded = await getMatch(matchId)
  //   setMatch(matchFounded)
  // }

  // useEffect(() => {
  //   loadMatch()
  // }, [])

  const Success = (
    <Result
      icon={<SmileOutlined />}
      title="Great, we have done all the operations!"
      extra={<Button type="primary">Next</Button>}
    />
  )

  const doMatch = (matchData) => {
    const date = matchData.date.format()
    const match = { ...matchData, authorId: id, date: date }

    createMatch(match)
      .then((res) => {
        console.log(res)
      })
      .catch((error) => alert(error.message))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Row
        style={{
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: '30px 30px',
        }}
      >
        <Col xs={24} md={24} lg={14} xl={7}>
          <Title level={2}>Match</Title>
          <Form
            layout="vertical"
            name="create-match"
            onFinish={doMatch}
            autoComplete="off"
          >
            <Form.Item
              name="boardgameName"
              label="Boardgame"
              rules={[
                {
                  required: true,
                  message: `Please input boardgame's name!`,
                },
              ]}
            >
              <Input placeholder="Boardgame' name" />
            </Form.Item>
            <div style={{ display: 'flex', gap: 8 }}>
              <Form.Item
                name="date"
                label="Date"
                rules={[
                  {
                    required: true,
                    message: `Please input date!`,
                  },
                ]}
              >
                <DatePicker />
              </Form.Item>
              <Form.Item name="duration" label="Duration">
                <InputNumber placeholder="Duration" />
              </Form.Item>
            </div>
            <label htmlFor="notes">Notes</label>
            <TextArea
              rows={3}
              name="notes"
              placeholder="Notes"
              allowClear={true}
              style={{ marginBottom: 20 }}
            />
            <Form.List
              initialValue={[{ fullName: '', score: null }]}
              name="participants"
            >
              {(fields, { add, remove }) => (
                <Participants fields={fields} add={add} remove={remove} />
              )}
            </Form.List>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ float: 'right' }}
              >
                Save
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </motion.div>
  )
}
