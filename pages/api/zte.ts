import { NextApiRequest, NextApiResponse } from "next"
import { baseURL } from "../../helper/var"

const formatPath = (path: string) => {
  const pArr = path.split("/")
  pArr.pop()
  return pArr.join("/") + "/"
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query
  const inputURL = new URL(url.toString())
  const remotePath = encodeURIComponent(
    inputURL.origin + formatPath(inputURL.pathname)
  )
  const currentPath = baseURL() + "/api/zte?url=" + remotePath

  const data = await fetch(url.toString()).then((r) => r.text())
  const newData = data
    .replace(/.+(m3u8)\?.+/gm, (s) => {
      return currentPath + encodeURIComponent(s)
    })
    .replace(/.+(ts)\?.+/gm, (s) => {
      return decodeURIComponent(remotePath) + s
    })
  res.write(newData)
  res.end()
}
