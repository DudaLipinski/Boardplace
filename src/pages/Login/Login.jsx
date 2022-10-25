import React from 'react'
import { authUser } from '../../services/user'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actions as userActions } from '../../state/user'
import { Link } from 'react-router-dom'

import * as Styled from './Login.styles'
import { Input } from '../../components/Input'
import { Button } from 'antd-mobile'
import { AutoCenter } from 'antd-mobile'
import { motion } from 'framer-motion'

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
      style={{ height: 'inherit' }}
    >
      <Styled.WrapperForm>
        <AutoCenter>
          <Styled.Title>Bordy</Styled.Title>
        </AutoCenter>
        <Styled.Paragraph>
          Please fill your detail to access your account.
        </Styled.Paragraph>
        <Styled.Form
          name="normal_login"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinishFailed={onFinishFailed}
          onFinish={handleLogin}
        >
          <Styled.Form.Item
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
              placeholder="E-mail"
            />
          </Styled.Form.Item>
          <Styled.Form.Item
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
              style={{ '--font-size': 'var(--adm-font-size-6)' }}
              type="password"
              placeholder="Password"
            />
          </Styled.Form.Item>
          <Styled.Form.Item>
            <Styled.Checkbox>Remember me</Styled.Checkbox>
          </Styled.Form.Item>
          <Styled.Form.Item>
            <Button
              block
              shape="rounded"
              color="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <Styled.WrapperLinks>
              <Link
                style={{ fontSize: 'var(--adm-font-size-6)' }}
                to="/create-account"
              >
                Register now!
              </Link>
              <Link style={{ fontSize: 'var(--adm-font-size-6)' }} to="">
                Forgot password
              </Link>
            </Styled.WrapperLinks>
          </Styled.Form.Item>
        </Styled.Form>
      </Styled.WrapperForm>
    </motion.div>
  )
}
