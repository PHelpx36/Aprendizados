//Elementos

const notesContainer = document.querySelector("#notes-container");

const noteInput = document.querySelector("#note-content");

const addNotebtn = document.querySelector(".add-note");

//Funções
function showNotes() {
    getNotes().forEach((note) => {
        const noteElement = createNote(note.id, note.content, note.fixed);

        notesContainer.appendChild(noteElement)
    });
}

function cleanNotes() {
    notesContainer.replaceChild([])
}

function addNote() {   
    const notes = getNotes();
    
    const novoObjeto = {
        id: generateId(),

        content: noteInput.value,

        fixed: false,
    }
    
    const noteElement = createNote(novoObjeto.id, novoObjeto.content, novoObjeto.fixed);
    
    notesContainer.appendChild(noteElement);

    notes.push(novoObjeto);

    saveNotes(notes)

    noteInput.value = ""
} 

function generateId() {
    return Math.floor(Math.random() * 5000);
}
//Eventos
    
addNotebtn.addEventListener("click", () => addNote())
    
    
function createNote(id, content, fixed) {
    
    const element = document.createElement("div")
    
    element.classList.add("note")
   
    const textarea = document.createElement("textarea")
    
    textarea.value = content

    textarea.placeholder = "Adicione algum texto..."

    element.appendChild(textarea)

    const removeIcon = document.createElement("i");
    removeIcon.classList.add(...["bi", "bi-x-lg"]);
    element.appendChild(removeIcon);

    const pinIcon = document.createElement("i");
    pinIcon.classList.add(...["bi", "bi-pin"]);
    element.appendChild(pinIcon);

    if(fixed) {
        element.classList.add("fixed")
    }

    //Eventos do elemento
    element.querySelector(".bi-pin").addEventListener("click", () => {
        toggleFixNote(id);
    })

    element.querySelector(".bi-x-lg").addEventListener("click", () => {
        deleteNote(id, element);
    })

    return element;
}

function toggleFixNote(id) {
    const notes = getNotes();

    const targetNote = notes.filter((note) => note.id === id)[0];

    targetNote.fixed = !targetNote.fixed;

    saveNotes(notes)
    showNotes()
  
}
function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id !== id)

    saveNotes(notes)

    notesContainer.removeChild(element)
}
// local Storage

function getNotes() {
    const notes = JSON.parse(localStorage.getItem("notes") || "||");

    return notes;
}

function saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes))
}

// Inicialização

showNotes();

