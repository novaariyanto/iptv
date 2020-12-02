import { NextApiRequest, NextApiResponse } from "next"
import { Channels } from "../../helper/db"

export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    res.write("#EXTM3U\n")
    const channels = await Channels()
    channels.forEach((ch) => {
      const { vidio_id, image, group, name, url, yt_id } = ch
      const baseUrl = process.env.BASE_URL || ""
      let streamUrl = url ? url : baseUrl + "/api/vidio?id=" + vidio_id
      streamUrl = yt_id ? "/api/yt?id=" + yt_id : streamUrl

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
