import { useId, useState } from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

interface ITab {
  name: string
  path: string
}

const TABS = [
  {
    path: '/',
    name: 'Store',
  },
  {
    path: '/about',
    name: 'About',
  },
]

export default function Tabs() {
  const router = useRouter()
  const [selectedTab, setSelectedTab] = useState(router.pathname)

  const onClick = (path: string) => {
    setSelectedTab(path)
    router.push(path)
  }

  return (
    <List>
      {TABS.map((tab) => (
        <Item
          key={useId()}
          className={`${selectedTab === tab.path ? 'active' : ''}`}
          onClick={() => onClick(tab.path)}
        >
          <Box>{tab.name}</Box>
        </Item>
      ))}
    </List>
  )
}

const List = styled.ul`
  display: flex;
  /* min-width: 150px; */
  height: 100%;

  @media (max-width: 400px) {
    display: grid;
    width: 100vw;
    grid-template-columns: 1fr 1fr;
  }
`

const Item = styled.li`
  height: 100%;
  padding: 0 15px;

  &.active {
    border-bottom: 3px solid var(--primary);
  }

  &:hover {
    cursor: pointer;
  }

  & + & {
    margin-left: 10px;
  }

  @media (max-width: 400px) {
    display: flex;
    justify-content: center;
  }
`

const Box = styled.div`
  display: flex;
  align-items: center;
  height: 47px;
`
