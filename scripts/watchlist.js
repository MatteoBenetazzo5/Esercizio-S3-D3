//Stopare il riavvio della pagina automatico
const form = document.getElementById("watch-form")

//Funzione che elimina un item dalla lista della mia watchlist
const deleteCard = function (e){
    console.log("ELIMINO ITEM", e)
    e.target.parentElement.remove()
}

//Funzione per marcare come completato il titolo della mia pagina HTML
const toggleDone = function (e){
    console.log("TOGGLE COMPLETATO", e)
    e.target.classList.toggle("fatto")
}

//Stopare il riavvio della pagina automatico
const handleFormSubmit = function (e){ 
    e.preventDefault()
    console.log("RECUPERO DATO")




// 1) Recupero il riferimento principale che è quello del form
const formInput = document.getElementById('watch-form')
const titleInput = document.getElementById('title-input')
const listInput = document.getElementById('watch-list')

// 2) Dagli input recupero i valori
const valoreTitle = titleInput.value

// 3) Confermiamo intanto tutto con console.log()
console.log(valoreTitle)

// 4) Creo un <li> vuoto
const item = document.createElement("li")

// 5) Applico una classe CSS "watch-card"
item.classList.add("watch-card") // <li class="watch-card"></li>

// 6) Riempio il contenitore con i dati presi dal form
item.innerHTML = `
  <span onclick="toggleDone(event)">${valoreTitle}</span>
  <button onclick="deleteCard(event)">🗑️</button>
`
// 7) Appendo l'item completo nella lista "watch-list"
listInput.appendChild(item)

// 8) Resetto il campo Input
form.reset()

}

form.addEventListener('submit', handleFormSubmit)
