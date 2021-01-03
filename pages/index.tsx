import Head from "next/head"
import fetch from "node-fetch"
import { useEffect, useState } from "react"
import GithubCorner from "react-github-corner"

import { Box } from "@chakra-ui/react"

import { ChannelList } from "../components/ChannelList"
import { Hero } from "../components/Hero"
import { IChannel } from "../helper/db"

const Index = () => {
  const [channels, setChannels] = useState<IChannel[]>([])

  useEffect(() => {
    fetch("/api/all")
      .then((r) => r.json())
      .then((c) => setChannels(c.data))
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
