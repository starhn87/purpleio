import styled from '@emotion/styled'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { Main } from 'pages'

export default function about() {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Title>퍼플아이오 과제입니다.</Title>
        </Container>
      </Main>
      <Footer />
    </>
  )
}

const Container = styled.div``

const Title = styled.p``
