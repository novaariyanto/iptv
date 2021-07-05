import { NextApiRequest, NextApiResponse } from "next"

import fetch from "node-fetch"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query
    const url = "https://www.dailymotion.com/player/metadata/video/" + id
    const hlsUrl = await fetch(url)
      .then((r) => r.json())
      .then((r) => {
        return r.qualities.auto[0].url
      })
    await fetch(hlsUrl)
      .then((r) => r.text())
      .then((d) => {
        res.send(d)
      })
    res.end()
  } catch (e) {
    console.log(e)
    res.end("")
  }
}
