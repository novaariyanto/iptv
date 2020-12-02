import neatCsv from "neat-csv"
import fetch from "node-fetch"
const baseUrl = process.env.VERCEL_URL || "http://localhost:4000"

export interface IChannel {
  name: string
  image: string
  group: string
  vidio_id: number
  url?: string
  yt_id?: string
}

export const Channels = async () => {
  const url = "https://" + baseUrl + "/db.csv"
  console.log(url)
  const r = await fetch(url).then((r) => r.text())
  const data = r.replace(/[\u200B-\u200D\uFEFF]/g, "")
  const result: IChannel[] = await neatCsv(data)
  return result
}
