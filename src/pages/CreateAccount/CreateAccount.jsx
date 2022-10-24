import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUser } from '../../services/user'

import { useDispatch } from 'react-redux'
import { actions as userActions } from '../../state/user'

import * as Styled from '../Login/Login.styles'

import { Col, Row, Typography, Button, InputNumber, Form, Input } from 'antd'
import { motion } from 'framer-motion'

import illustration from '../../assets/loginIllustration.png'

const { Title, Paragraph } = Typography

export const CreateAccount = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const createNewAccount = (formData) => {
    console.log(formData)
    createUser(formData).then((createdUser) => {
      dispatch(userActions.setUser(createdUser))
    })

    // navigate('/dashboard')
  }

  const onFinishFailed = (errorInfo) => {
    alert('Failed:', errorInfo)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.2 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Styled.Wrapper>
        <Row style={{ height: 'inherit' }}>
          <Col xs={24} md={24} lg={10}>
            <Styled.WrapperForm>
              <div style={{ width: '60%' }}>
                <Title level={2}>
                  Board<em style={{ paddingLeft: 2 }}>it!</em>
                </Title>
                <Paragraph>
                  Please fill your detail to create your account.
                </Paragraph>
                <Form
                  name="normal_create"
                  className="create-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinishFailed={onFinishFailed}
                  onFinish={createNewAccount}
                >
                  <Form.Item
                    name={'firstName'}
                    label="First name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name={'lastName'}
                    label="Last name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name={'email'}
                    label="Email"
                    rules={[
                      {
                        type: 'email',
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name={'age'}
                    label="Age"
                    rules={[
                      {
                        type: 'number',
                        min: 0,
                        max: 99,
                        required: true,
                      },
                    ]}
                  >
                    <InputNumber />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name={'password'}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      size="large"
                      type="primary"
                      htmlType="submit"
                      className="create-form-button"
                    >
                      Create Account
                    </Button>{' '}
                    Or <Link to="/login">Login</Link>
                  </Form.Item>
                </Form>
              </div>
            </Styled.WrapperForm>
          </Col>
          <Col
            xs={24}
            md={24}
            lg={14}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Styled.WrapperIllustration>
              <Styled.Illustration src={illustration} alt="" />
            </Styled.WrapperIllustration>
          </Col>
        </Row>
      </Styled.Wrapper>
    </motion.div>
  )
}
