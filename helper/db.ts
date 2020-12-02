import neatCsv from "neat-csv"
import { useRouter } from "next/dist/client/router"
import fetch from "node-fetch"

export interface IChannel {
  name: string
  image: string
  group: string
  vidio_id: number
  url?: string
  yt_id?: string
}

export const Channels = async () => {
  // const r = await fetch("http://localhost:4000/db.csv").then((r) => r.text())
  const r = await fetch(useRouter().locale + "/db.csv").then((r) => r.text())
  const data = r.replace(/[\u200B-\u200D\uFEFF]/g, "")
  const result: IChannel[] = await neatCsv(data)
  return result
}
