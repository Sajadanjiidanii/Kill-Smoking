let $ = document;
let content = $.querySelector(".content")
let startMovie = $.querySelector(".startMovie")
content.style.display = "none"

setTimeout(() => {
    content.style.display = "block"
    startMovie.style.display = "none"
}, 5000)