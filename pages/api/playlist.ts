import { NextApiRequest, NextApiResponse } from "next"
import { Channels } from "../../helper/db"

const tokenHandler = ({ token }: { token: string }) => {
  try {
    const t = token.split(".")[1]
    const r = Buffer.from(t, "base64").toString()
    const base = JSON.parse(r).data.playlist_url
    return base + "?" + token
  } catch (e) {
    console.log(e)
    return ""
  }
}

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const urls = Channels.map((channel) => {
    const url = `https://www.vidio.com/live/${channel.id}/tokens?type=jwt`
    return fetch(url, { method: "POST" })
      .then((r) => r.json())
      .then(tokenHandler)
  })
  try {
    const urlsData = await Promise.all(urls)
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
