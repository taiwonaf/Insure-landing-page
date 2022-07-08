const hamOpen = document.getElementById("ham-open");
const hamClose = document.getElementById("ham-close");
const menu = document.getElementById("menu");
const bodyDoc = document.getElementsByTagName("body")[0];


hamOpen.addEventListener("click", () => {
    hamOpen.parentElement.parentElement.classList.add("activate-ham");
    bodyDoc.style.overflow = "hidden";
})

hamClose.addEventListener("click", () => {
    bodyDoc.style.overflow = "scroll";
    hamOpen.parentElement.parentElement.classList.remove("activate-ham");
})