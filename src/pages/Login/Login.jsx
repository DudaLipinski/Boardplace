import React from 'react'
import { authUser } from '../../services'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actions as userActions } from '../../state/user'

import * as Styled from './Login.styles'
import { Link } from 'react-router-dom'
import { Col, Row, Typography, Button, Checkbox, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import illustration from '../../assets/loginIllustration.png'

const { Title, Paragraph } = Typography

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onFinishFailed = (errorInfo) => {
    alert('Failed:', errorInfo)
  }

  const doLogin = (userData) => {
    authUser(userData)
      .then((user) => {
        dispatch(userActions.removeUser())
        dispatch(userActions.addUser(user))
        localStorage.setItem('user', JSON.stringify(userData))
      })
      .catch((error) => alert(error.message))

    navigate('/dashboard')
  }

  return (
    <>
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
                  initialValues={{
                    remember: true,
                  }}
                  onFinishFailed={onFinishFailed}
                  onFinish={doLogin}
                >
                  <Form.Item
                    name="email"
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
                    Or <Link to="">register now!</Link>
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
    </>
  )
}
