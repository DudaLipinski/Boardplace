import React, { useEffect } from 'react'
import { authUser } from '../../services/user'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actions as userActions } from '../../state/user'

import * as Styled from './Login.styles'
import { Link } from 'react-router-dom'
import { Col, Row, Typography, Button, Checkbox, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'

import illustration from '../../assets/loginIllustration.png'

const { Title, Paragraph } = Typography

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onFinishFailed = (errorInfo) => {
    alert('Failed:', errorInfo)
  }

  const handleLogin = (loginPayload) => {
    authUser(loginPayload)
      .then(({ user }) => {
        dispatch(userActions.setUser(user))
        navigate('/dashboard')
      })
      .catch((error) => alert(error.message))
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
                  Please fill your detail to access your account.
                </Paragraph>
                <Form
                  name="normal_login"
                  className="login-form"
                  layout="vertical"
                  initialValues={{
                    remember: true,
                  }}
                  onFinishFailed={onFinishFailed}
                  onFinish={handleLogin}
                >
                  <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your e-mail!',
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="E-mail"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Password!',
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Link className="login-form-forgot" to="">
                      Forgot password
                    </Link>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      size="large"
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Log in
                    </Button>{' '}
                    Or <Link to="/create-account">register now!</Link>
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
