import { NextApiRequest, NextApiResponse } from "next"
import { Channels } from "../../helper/db"
import { baseURL } from "../../helper/var"

export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    res.write("#EXTM3U\n")
    const channels = await Channels()
    channels.forEach((ch) => {
      const { vidio_id, image, group, name, url, yt_id, zte } = ch

      let streamUrl = url ? url : baseURL() + "/api/vidio?id=" + vidio_id
      streamUrl = yt_id ? baseURL() + "/api/yt?id=" + yt_id : streamUrl
      streamUrl = zte
        ? baseURL() + "/api/zte?url=" + encodeURIComponent(streamUrl)
        : streamUrl
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
