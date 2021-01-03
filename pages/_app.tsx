import { AppProps } from "next/app"

import { ChakraProvider, theme } from "@chakra-ui/react"

function MyApp(Props: AppProps) {
  const { Component, pageProps } = Props
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
