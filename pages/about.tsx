import styled from '@emotion/styled'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { Main } from 'pages'
import { Title } from './404'

export default function about() {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Title>퍼플아이오 과제입니다.</Title>
          <List>
            <Item>메인 페이지에서는 음식점 목록을 보여줍니다.</Item>
            <Item>음식점 클릭시 모달창으로 상세정보를 볼 수 있습니다.</Item>
            <Item>About 페이지에서는 프로젝트를 설명합니다.</Item>
            <Item>
              유효하지 않은 경로 접근시 에러 페이지로 이동 후 5초 뒤 메인
              페이지로 이동합니다.
            </Item>
          </List>
        </Container>
      </Main>
      <Footer />
    </>
  )
}

const Container = styled.div`
  text-align: center;
`

const SubTitle = styled.p`
  font-size: 18px;
`

const List = styled.ul``

const Item = styled.li`
  line-height: 35px;
`
