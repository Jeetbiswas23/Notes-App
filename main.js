const notescontainer = document.querySelector(".notes-container");
const button = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function shoenotes() {
    notescontainer.innerHTML = localStorage.getItem('notes');
}
shoenotes();

function updateStorage() {
    localStorage.setItem("notes", notescontainer.innerHTML);
}

button.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let image = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    image.src = "images/delete.png";
    notescontainer.appendChild(inputbox).appendChild(image);
    updateStorage();
})

notescontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(notes => {
            notes.onkeyup = function () {
                updateStorage();
            }
        })
    }
})


// How localStorage Functions in this Code
    // Initial Load: When the page is loaded, the shoenotes() function retrieves the saved notes from localStorage and renders them in the notescontainer. If there are no saved notes 
    // (i.e., the user has not added any yet), nothing happens.

// Add Notes: When a new note is added, it's immediately appended to the notescontainer. Then, updateStorage() is called to store the new state of the notes in localStorage.

// Delete Notes: When a note is deleted, the corresponding paragraph element is removed from the DOM. updateStorage() is then called to update localStorage, removing the deleted note.

// Edit Notes: As the user types and edits the notes, the onkeyup event fires for each note, updating the content in localStorage with each key press. This ensures that even partial changes are saved.

