document.getElementById("review-form").addEventListener("submit",async e=>{
    e.preventDefault()

    const reviewerName = document.getElementById("review-name").value
    const review = document.getElementById("review-text").value

    await fetch("/review",{
        method : "POST",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify({reviewerName,review})
    })
    alert("Review Saved")
    e.target.reset()
    await loadReviews()
})


/*________________________Loading Review_____________________*/

async function loadReviews() {
  const res = await fetch("/review")
  const reviews = await res.json()

  const box = document.getElementById("review-box")

  box.innerHTML = reviews.map(r => `
    <section class="review">
      <strong>${r.reviewerName}</strong>
      <p>${r.review}</p>
      <small>${new Date(r.date).toLocaleString()}</small>
    </section>
  `).join("")
}



const toggleBtn = document.getElementById("toggle-reviews")
const reviewsSection = document.getElementById("reviews-section")

toggleBtn.addEventListener("click", async () => {
  if (reviewsSection.style.display === "none") {
    reviewsSection.style.display = "block"
    toggleBtn.textContent = "Hide Reviews"
    
    // Load reviews only when first clicked
    if (!reviewsSection.dataset.loaded) {
      await loadReviews()
      reviewsSection.dataset.loaded = "true" // mark as loaded
    }
  } else {
    reviewsSection.style.display = "none"
    toggleBtn.textContent = "Show Reviews"
  }
})



