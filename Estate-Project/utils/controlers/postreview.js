import fs from "node:fs/promises"
import path from "node:path"

export function postReview(req, res, baseDir) {

  return new Promise((resolve) => {

    let body = ""

    req.on("data", chunk => body += chunk)

    req.on("end", async () => {

      try {

        const review = JSON.parse(body)

        const file = path.join(baseDir, "review.json")
        const existing = JSON.parse(await fs.readFile(file, "utf8"))

        existing.push({
          ...review,
          date: new Date().toISOString()
        })

        await fs.writeFile(file, JSON.stringify(existing, null, 2))

        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ message: "Saved" }))

        resolve()

      } catch (err) {
        console.error(err)
        res.writeHead(500)
        res.end("Server error")
        resolve()
      }

    })
  })
}
