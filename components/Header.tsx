import styled from '@emotion/styled'
import Tabs from './Tabs'

export default function Header() {
  return (
    <Wrapper>
      <Head>
        <Logo>AWESOME FOOD STORE</Logo>
        <Container>
          <Tabs />
        </Container>
      </Head>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: fixed;
  width: 100%;
  min-width: 400px;
  height: 50px;
  background-color: white;
`

const Head = styled.header`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  place-items: center;
`

const Logo = styled.article`
  @media (max-width: 400px) {
    display: none;
  }
`

const Container = styled.section`
  height: 100%;
`
