import styled from '@emotion/styled'
import Link from 'next/link'

export default function Header() {
  return (
    <Wrapper>
      <Head>
        <article>AWESOME FOOD STORE</article>
        <Container>
          <List>
            <Item>
              <Link href={'/'}>
                <a>Store</a>
              </Link>
            </Item>
            <Item>
              <Link href={'/about'}>
                <a>About</a>
              </Link>
            </Item>
          </List>
        </Container>
      </Head>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  height: 50px;
`

const Head = styled.header`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  place-items: center;
`

const Container = styled.section`
  height: 100%;
`

const List = styled.ul`
  display: flex;
  height: 100%;
`

const Item = styled.li`
  display: flex;
  height: 100%;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  & + & {
    margin-left: 10px;
  }
`
