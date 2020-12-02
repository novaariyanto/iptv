import { NextApiRequest, NextApiResponse } from "next"
import fetch from "node-fetch"
import { URL } from "url"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query
    const url = `https://www.youtube.com/get_video_info?video_id=${id}&asv=2`
    const d = await fetch(url).then((r) => r.text())
    const parsed = new URL("http://localhost?" + d)
    const playerData = JSON.parse(parsed.searchParams.get("player_response"))
    const hlsUrl = playerData.streamingData.hlsManifestUrl
    const hlsData = await fetch(hlsUrl).then((r) => r.text())
    res.end(hlsData)
  } catch (e) {
    console.log(e)
    res.end()
  }
}
