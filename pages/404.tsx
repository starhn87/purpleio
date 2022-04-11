import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function error() {
  const [count, setCount] = useState(5)
  const router = useRouter()

  useEffect(() => {
    if (count === 0) {
      router.push('/')
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1)
    }, 1000)

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [count])

  return (
    <Container>
      <Title>유효하지 않은 경로입니다.</Title>
      <Message>{count}초 후 메인 화면으로 이동합니다.</Message>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.p`
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: bold;

  @media (max-width: 400px) {
    font-size: 22px;
  }
`

const Message = styled.p`
  padding-top: 15px;
  font-size: 18px;

  @media (max-width: 400px) {
    font-size: 15px;
  }
`
