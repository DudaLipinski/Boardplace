import styled from 'styled-components'
import { Button as AntButton } from 'antd'

export const Logout = styled(AntButton)`
  margin: 0 20px;
  padding: 0 15px;

  span {
    font-size: 13px;
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`
