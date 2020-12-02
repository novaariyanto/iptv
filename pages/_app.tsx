import { AppProps } from "next/app"

function MyApp(Props: AppProps) {
  const { Component, pageProps } = Props
  return <Component {...pageProps} />
}

export default MyApp
