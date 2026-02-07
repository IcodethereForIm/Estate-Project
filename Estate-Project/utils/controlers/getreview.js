import fs from "node:fs/promises"
import path from "node:path"

export async function getReviews(req, res, baseDir) {

  try {

    const file = path.join(baseDir, "review.json")
    const data = await fs.readFile(file, "utf8")

    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(data)

  } catch (err) {
    console.error(err)
    res.writeHead(500)
    res.end("Failed to load reviews")
  }
}
