import { NextApiRequest, NextApiResponse } from "next"
import { Channels } from "../../helper/db"

export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    res.write("#EXTM3U\n")
    Channels.forEach((ch) => {
      const { id, image, group, name, url } = ch
      const baseUrl = process.env.BASE_URL || ""
      const streamUrl = url ? url : baseUrl + "/api/play?id=" + id
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
