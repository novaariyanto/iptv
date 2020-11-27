import { NextApiRequest, NextApiResponse } from "next"
import { Channels } from "../../helper/db"

export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const urlsData = Channels.map(({ id }) => {
      const baseUrl = process.env.BASE_URL || ""
      return baseUrl + "/api/play?id=" + id
    })
    res.write("#EXTM3U\n")
    urlsData.forEach((url, idx) => {
      const { image, group, name } = Channels[idx]
      res.write(
        `#EXTINF:-1 tvg-logo=\"${image}\" group-title=\"${group}\", ${name.toUpperCase()}\n`
      )
      res.write(url)
      res.write("\n\n")
    })
    return res.end()
  } catch {
    return res.end()
  }
}
