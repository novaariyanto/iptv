import { baseURL } from "./var"
import fetch from "node-fetch"
import neatCsv from "neat-csv"

export interface IChannel {
  name: string
  image: string
  group: string
  vidio_id: number
  url?: string
  dm: string
}

export const Channels = async () => {
  const url = baseURL() + "/db.csv"
  const r = await fetch(url).then((r) => r.text())
  const data = r.replace(/[\u200B-\u200D\uFEFF]/g, "")
  const result: IChannel[] = await neatCsv(data)
  return result
}
