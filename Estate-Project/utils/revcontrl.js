import fs from "node:fs/promises"
import path from "node:path"

export function reviewController(req, res, baseDir) {

  if (req.method === "POST" && req.url === "/review") {

    return new Promise((resolve) => {

      let body = ""

      req.on("data", chunk => body += chunk)

      req.on("end", async () => {

        try {

          if (!body) return resolve(true)

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

          resolve(true)

        } catch (err) {
          console.error(err)
          res.writeHead(500)
          res.end("Server error")
          resolve(true)
        }

      })

    })
  }

  return Promise.resolve(false)
}
