import { useCallback, useId, useState } from 'react'
import styled from '@emotion/styled'
import { Dialog } from '@mui/material'
import Detail from 'components/Detail'
import { getList } from 'pages/api'
import { useQuery } from 'react-query'

export interface IItem {
  id: number
  name: string
  description: string
  image: string
  thumb: string
}

interface HomeProps {
  data: IItem[]
}

export default function Home({ data }: HomeProps) {
  const [clicked, setClicked] = useState(false)
  const [clickedId, setClickedId] = useState<number | null>(null)
  const { data: itmes } = useQuery(
    ['items'],
    async () => await (await getList()).data,
    {
      initialData: data,
    }
  )

  const onClick = (id: number) => {
    setClicked(true)
    setClickedId(id)
  }

  const onClose = useCallback(() => setClicked(false), [])

  return (
    <>
      <Main>
        <Container>
          <List>
            {itmes.map((item: IItem) => (
              <Item key={useId()} onClick={() => onClick(item.id)}>
                <Title>{item.name}</Title>
                <img src={item.thumb} alt="썸네일" />
              </Item>
            ))}
          </List>
        </Container>
      </Main>
      <Dialog open={clicked} maxWidth="md" fullWidth={true}>
        <Detail id={clickedId!} onClose={onClose} />
      </Dialog>
    </>
  )
}

export async function getStaticProps() {
  const data = await (await getList()).data

  return {
    props: {
      data,
    },
  }
}

export const Main = styled.main`
  min-height: calc(100vh - 90px);
  padding: 30px;
`

const Container = styled.section``

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 25px;
  justify-content: center;
  justify-items: center;
`

const Item = styled.li`
  &:hover {
    cursor: pointer;
  }
`

const Title = styled.p`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
`
