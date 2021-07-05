import { NextApiRequest, NextApiResponse } from "next"

import fetch from "node-fetch"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query
    const url = "https://www.dailymotion.com/player/metadata/video/" + id
    await fetch(url)
      .then((r) => r.json())
      .then((r) => {
        res.end(r.qualities.auto[0].url)
      })
    res.end()
  } catch (e) {
    console.log(e)
    res.end("")
  }
}
