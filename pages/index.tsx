import Head from "next/head"
import { useEffect, useState } from "react"
import GithubCorner from "react-github-corner"

import { Box } from "@chakra-ui/react"

import { ChannelList } from "../components/ChannelList"
import { Hero } from "../components/Hero"
import { Channels, IChannel } from "../helper/db"

const Index = () => {
  const [channels, setChannels] = useState<IChannel[]>([])

  useEffect(() => {
    Channels().then((c) => setChannels(c))
  }, [])

  return (
    <Box>
      <Head>
        <title>IPTV Playlist Indonesia</title>
      </Head>
      <Hero />
      <ChannelList channels={channels} />
      <GithubCorner href="https://github.com/mwafa/iptv" />
    </Box>
  )
}

export default Index
