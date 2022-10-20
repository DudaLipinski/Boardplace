import styled from 'styled-components'
import { Button as AntButton } from 'antd'

export const Button = styled(AntButton)`
  margin-top: 20px;
  width: 100%;
`

export const Wrapper = styled.main`
  height: -webkit-fill-available;
  height: fill-available;
  height: 100vh;
`

export const WrapperForm = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const WrapperIllustration = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: #cbcce8;
  border-radius: 40px;
`

export const Illustration = styled.img`
  width: auto;
  height: auto;
  margin: 0 auto;
  display: block;
`
