const SEE_ALL_URL = "http://localhost:3000/"
const ADD_NEW_URL = "http://localhost:3000/todos"

let titleTextBox = document.getElementById("titleTextBox")
let priorityTextBox = document.getElementById("priorityTextBox")
let submitBtn = document.getElementById("submitBtn")
let itemsList = document.getElementById("itemsList")

submitBtn.addEventListener('click', function(){
  let title = titleTextBox.value
  let priority = priorityTextBox.value
  saveTask({title : title, priority : priority})
})

function saveTask(item) {
  fetch(ADD_NEW_URL,{
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(item)
  }).then(function(response){
      fetchAllTasks()
  })
}

function updateUI(items){

      let listItems = items.map((items) => {
        return `<li> ${items.title} ${items.priority}</li>`
      })
      itemsList.innerHTML = listItems.join(' ')
}

function fetchAllTasks() {
  fetch(SEE_ALL_URL)
  .then(function(response){
    return response.json()
  }).then(function(items){
      updateUI(items)
  })
}
fetchAllTasks()
