import { useEffect, useState } from "react"

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
      <Hero />
      <ChannelList channels={channels} />
    </Box>
  )
}

export default Index
