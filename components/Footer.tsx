import styled from '@emotion/styled'
import { memo } from 'react'

export default memo(function Footer() {
  return <Wrapper>@ 2022 이승우</Wrapper>
})

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
`
