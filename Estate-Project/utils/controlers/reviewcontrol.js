import { getReviews } from "./getreview.js"
import { postReview } from "./postreview.js"

export async function reviewController(req, res, baseDir) {

  if (req.method === "GET" && req.url === "/review") {
    await getReviews(req, res, baseDir)
    return true
  }

  if (req.method === "POST" && req.url === "/review") {
    await postReview(req, res, baseDir)
    return true
  }

  return false
}
