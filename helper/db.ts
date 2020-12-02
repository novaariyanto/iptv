import { readFileSync } from "fs"
import neatCsv from "neat-csv"

export interface IChannel {
  name: string
  image: string
  group: string
  vidio_id: number
  url?: string
  yt_id?: string
}

export const Channels = async () => {
  const data = readFileSync("db.csv")
    .toString()
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
  const result: IChannel[] = await neatCsv(data)
  return result
}
