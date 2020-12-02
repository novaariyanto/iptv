export const baseURL = () => {
  const domain = process.env.VERCEL_URL || "localhost:4000"
  return process.env.VERCEL_URL ? "https://" + domain : "http://" + domain
}
