import neatCsv from "neat-csv"
import fetch from "node-fetch"
import { baseURL } from "./var"

export interface IChannel {
  name: string
  image: string
  group: string
  vidio_id: number
  url?: string
  yt_id?: string
  zte?: boolean
}

export const Channels = async () => {
  const url = baseURL() + "/db.csv"
  const r = await fetch(url).then((r) => r.text())
  const data = r.replace(/[\u200B-\u200D\uFEFF]/g, "")
  const result: IChannel[] = await neatCsv(data)
  return result
}
