import fetch from "node-fetch"

export const tokenHandler = ({ token }: { token: string }) => {
  try {
    const t = token.split(".")[1]
    const r = Buffer.from(t, "base64").toString()
    const base = JSON.parse(r).data.playlist_url
    return base + "?" + token
  } catch (e) {
    console.log(e)
    return ""
  }
}

export const urlGen = async (id: string) => {
  const url = `https://www.vidio.com/live/${id}/tokens?type=jwt`
  return fetch(url, { method: "POST" })
    .then((r) => r.json())
    .then(tokenHandler)
}
