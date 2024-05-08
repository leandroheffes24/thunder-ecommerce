const header = document.getElementById("header")

function notScrolled () {
    return window.scrollY === 0
}

function handleScroll () {
    if(notScrolled()){
        header.classList.remove("headerScrolled")
    } else {
        header.classList.add("headerScrolled")
    }
}

window.addEventListener("scroll", handleScroll)