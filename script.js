function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.src = "./assets/profile-light.png"
  } else {
    img.src = "./assets/profile.png"
  }
}
