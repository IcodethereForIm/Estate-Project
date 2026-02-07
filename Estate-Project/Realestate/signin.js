document.getElementById("signin-form").addEventListener("submit", e => {
  e.preventDefault()

  const name = document.getElementById("name").value
  const dob = document.getElementById("dob").value
  const address = document.getElementById("address").value
  const identity = document.getElementById("identity").files[0]

  const user = {
    name,
    dob,
    address,
    identity: identity?.name
  }

  console.log("User data:", user)

  alert("Sign in successful!")

})
