import React, { useState, createElement } from 'react'
import { items } from './MenuItems'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actions as userActions } from '../../state/user'

import * as Styled from './MenuLayoutWrapper.styles'
import character from '../../assets/character_2.png'

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Layout, Menu as SidebarMenu, Switch } from 'antd'
const { Header, Sider, Content } = Layout

export const MenuLayoutWrapper = ({ children }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [collapsed, setCollapsed] = useState(false)

  const [theme, setTheme] = useState('light')
  const [current, setCurrent] = useState('board')
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light')
  }

  const onClick = (e) => {
    setCurrent(e.key)
    navigate(`/${e.key}`)
  }

  const doLogout = () => {
    dispatch(userActions.removeUser())
    localStorage.clear()
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
        <Styled.Character src={character} alt="" />
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
