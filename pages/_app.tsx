import type { AppProps } from 'next/app'
import { css, Global } from '@emotion/react'
import Head from 'next/head'
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query'

const globalStyles = css`
  :root {
    --primary: #669cff;
    --blue: #5e72e4;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    background-color: white;
  }

  a {
    text-decoration: none;
    color: black;
  }
  ul {
    list-style-type: none;
  }
  img {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  button {
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
  input {
    outline: none;
    padding: 0 1.5rem;
    &:focus::placeholder {
      color: transparent;
    }
  }

  .btn {
    background-color: var(--sky);
    color: var(--primary);
    padding: 0.5rem 2.5rem;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 2rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        staleTime: 60 * 1000, // 1분
      },
    },
  })

  return (
    <>
      <Head>
        <title>퍼플아이오</title>
      </Head>
      <Global styles={globalStyles} />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
