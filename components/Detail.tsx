import styled from '@emotion/styled'
import { getDetail } from 'pages/api'
import { memo } from 'react'
import { MdClose } from 'react-icons/md'
import { useQuery } from 'react-query'

interface DetailProps {
  onClose: () => void
  id: number
}

export default memo(function Detail({ id, onClose }: DetailProps) {
  const { data: item } = useQuery(
    ['detail', id],
    async () => await (await getDetail(id)).data,
    {
      suspense: true,
    }
  )

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button onClick={onClose}>
          <MdClose />
        </Button>
      </ButtonWrapper>
      <Container>
        <Title>{item.name}</Title>
        <Box>
          <Image src={item.image} alt={item.name} />
          <Desc>{item.description}</Desc>
        </Box>
        {item.url ? (
          <AnchorWrapper>
            <Anchor href={item.url} target="_blank">
              홈페이지 바로가기
            </Anchor>
          </AnchorWrapper>
        ) : null}
      </Container>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  padding: 10px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Button = styled.button`
  padding: 5px;
  font-size: 24px;
  background-color: transparent;
`

const Container = styled.div`
  padding: 0 10px 10px;
`

const Title = styled.p`
  padding-bottom: 20px;
  font-size: 35px;
  font-weight: 500;
  text-align: center;
`

const Box = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  justify-items: center;
  padding: 20px 0;
`

const Image = styled.img`
  margin-right: 10px;
`

const Desc = styled.p`
  white-space: pre-wrap;
`

const AnchorWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Anchor = styled.a`
  color: var(--primary);

  &:hover {
    color: var(--blue);
  }
`
