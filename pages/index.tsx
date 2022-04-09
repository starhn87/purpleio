import styled from '@emotion/styled'
import Footer from 'components/Footer'
import Header from 'components/Header'

interface IItem {
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
  return (
    <>
      <Header />
      <Main>
        <Container>
          <List>
            {data.map((item) => (
              <Item key={item.id}>
                <Title>{item.name}</Title>
                <img src={item.thumb} alt="썸네일" />
              </Item>
            ))}
          </List>
        </Container>
      </Main>
      <Footer />
    </>
  )
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

export async function getServerSideProps() {
  const data = await (await fetch('http://localhost:9000/stores')).json()

  return {
    props: {
      data,
    },
  }
}
