import "video-react/dist/video-react.css"
import { AppProps } from "next/app"

function MyApp(Props: AppProps) {
  const { Component, pageProps } = Props
  return <Component {...pageProps} />
}

export default MyApp
