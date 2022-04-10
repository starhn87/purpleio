import styled from '@emotion/styled'
import Tabs from './Tabs'

export default function Header() {
  return (
    <Wrapper>
      <Head>
        <article>AWESOME FOOD STORE</article>
        <Container>
          <Tabs />
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
