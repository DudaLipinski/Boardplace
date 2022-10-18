import { HomeOutlined, TrophyOutlined, UserOutlined } from '@ant-design/icons'

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}
export const items = [
  getItem('Board', 'board', <HomeOutlined />),
  getItem('Matches', 'matches', <TrophyOutlined />),
  getItem('Profile', 'profile', <UserOutlined />),
]
