import React, { useState, createElement } from 'react'

import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { selectors as userSelectors } from '../../state/user'
import { useDispatch } from 'react-redux'
import { actions as userActions } from '../../state/user'

import * as Styled from './MenuLayoutWrapper.styles'
import character from '../../assets/character_2.png'

import {
  HomeOutlined,
  TrophyOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import { Button, Layout, Menu as SidebarMenu, Switch } from 'antd'
const { Header, Sider, Content } = Layout

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}
const items = [
  getItem('Home', 'home', <HomeOutlined />),
  getItem('Matches', 'matches', <TrophyOutlined />),
  getItem('Profile', 'profile', <UserOutlined />),
]

export const MenuLayoutWrapper = ({ children }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [collapsed, setCollapsed] = useState(false)

  const [theme, setTheme] = useState('light')
  const [current, setCurrent] = useState('1')
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light')
  }
  const onClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  const doLogout = () => {
    dispatch(userActions.removeUser())
    navigate('/login')
  }

  return (
    <Layout
      style={{
        height: '100vh',
      }}
    >
      <Sider
        trigger={true}
        collapsible
        collapsed={collapsed}
        theme={theme}
        style={{ padding: '30px 0' }}
      >
        <img className="logo" src={character} alt="" />
        <SidebarMenu
          theme={theme}
          onClick={onClick}
          selectedKeys={[current]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, background: 'white' }}
        >
          <Styled.HeaderWrapper>
            {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
            <div>
              <Switch
                checked={theme === 'dark'}
                onChange={changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
              />
              <Styled.Logout onClick={doLogout} shape="round" size="small">
                Logout
              </Styled.Logout>
            </div>
          </Styled.HeaderWrapper>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
