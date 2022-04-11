import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useDeferredValue, useEffect, useState } from 'react'

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
      clearTimeout(timer)
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

const Title = styled.p`
  font-size: 28px;
  font-weight: bold;
`

const Message = styled.p`
  padding-top: 15px;
  font-size: 18px;
`
