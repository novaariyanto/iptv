import { NextApiRequest, NextApiResponse } from "next"
import fetch from "node-fetch"
import { urlGen } from "../../helper/urlGenerator"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query
    const url = await urlGen(id.toString())
    await fetch(url)
      .then((r) => r.text())
      .then((r) => {
        res.end(r)
      })
    res.end()
  } catch (e) {
    console.log(e)
    res.end("")
  }
}
