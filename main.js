const notescontainer = document.querySelector(".notes-container");
const button = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

button.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let image = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    image.src = "images/delete.png";
    notescontainer.appendChild(inputbox).appendChild(image);
})

notescontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
})