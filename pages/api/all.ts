import { NextApiRequest, NextApiResponse } from "next"

import { Channels } from "../../helper/db"

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const channels = await Channels()
  return res.json({
    data: channels,
  })
}
