import React from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Space,
  DatePicker,
  Typography,
} from 'antd'

const { TextArea } = Input
const { Title } = Typography

export const CreateMatch = () => {
  const onFinish = (values) => {
    console.log('Received values of form:', values)
  }

  return (
    <Row style={{ justifyContent: 'center' }}>
      <Col xs={24} md={24} lg={12} xl={7}>
        <Title level={2}>Match</Title>
        <Form
          name="dynamic_form_nest_item"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="boardgame"
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
              rules={[
                {
                  required: true,
                  message: `Please input date!`,
                },
              ]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item name="duration">
              <Input placeholder="Duration" />
            </Form.Item>
          </div>
          <TextArea rows={3} placeholder="Notes" style={{ marginBottom: 20 }} />
          <Form.List name="players">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{
                      display: 'flex',
                      marginBottom: 8,
                    }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      name={[name, 'player']}
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
                      rules={[
                        {
                          required: true,
                          message: 'Missing score',
                        },
                      ]}
                    >
                      <Input placeholder="Score" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
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
            )}
          </Form.List>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            {/* <Button
              type="primary"
              danger
              htmlType="submit"
              style={{ float: 'right' }}
            >
              Delete
            </Button> */}
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}
