import { NextApiRequest, NextApiResponse } from "next"

import { Channels } from "../../helper/db"
import { baseURL } from "../../helper/var"

export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    res.write("#EXTM3U\n")
    const channels = await Channels()
    channels.forEach((ch) => {
      const { vidio_id, image, group, name, url, dm } = ch
      let streamUrl = (() => {
        if (url) return url
        if (dm) return baseURL() + "/api/dm?id=" + dm
        return baseURL() + "/api/vidio?id=" + vidio_id
      })()

      res.write(
        `#EXTINF:-1 tvg-logo=\"${image}\" group-title=\"${group}\", ${name.toUpperCase()}\n`
      )
      res.write(streamUrl)
      res.write("\n\n")
    })
    return res.end()
  } catch {
    return res.end()
  }
}
