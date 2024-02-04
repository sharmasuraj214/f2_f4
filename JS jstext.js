const form = document.getElementById("button-form");
const TO_DO = document.getElementById("TO_DO");
const STARTED = document.getElementById("STARTED");
const COMPLETED = document.getElementById("COMPLETED");
 
let inc = 1;
 
function getNewId() {
  inc++;
}

function removenonedis() {
    classList.remove("none-display")
}
 
function deleteRow(e) {
  const itemToDelete = e.target.closest(".create-js");
  if (itemToDelete) {
    itemToDelete.remove();
  }
}
 
function handleDragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  setTimeout(() => {
    e.target.classList.add("dragging");
  }, 0);
}
 
function handleDragEnd(e) {
  e.target.classList.remove("dragging");
}
 
function handleDrop(e) {
  e.preventDefault();
  const draggedItemId = e.dataTransfer.getData("text/plain");
  const draggedItem = document.getElementById(draggedItemId);
 
  const dropZoneId = e.target.closest(".todo-section").id;
  const dropZone = document.getElementById(dropZoneId);
 
  if (dropZone && draggedItem) {
    dropZone.appendChild(draggedItem);
  }
}
 
function handleDragOver(e) {
  e.preventDefault();
}
 
TO_DO.addEventListener("dragstart", handleDragStart);
TO_DO.addEventListener("dragend", handleDragEnd);
 
STARTED.addEventListener("dragstart", handleDragStart);
STARTED.addEventListener("dragend", handleDragEnd);
 
COMPLETED.addEventListener("dragstart", handleDragStart);
COMPLETED.addEventListener("dragend", handleDragEnd);
 
TO_DO.addEventListener("dragover", handleDragOver);
STARTED.addEventListener("dragover", handleDragOver);
COMPLETED.addEventListener("dragover", handleDragOver);
 
TO_DO.addEventListener("drop", handleDrop);
STARTED.addEventListener("drop", handleDrop);
COMPLETED.addEventListener("drop", handleDrop);
 
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("input-tag");
  const inputdate = document.getElementById("input-date")
  const value = document.createElement("form");
  value.classList.add("create-js");
  value.setAttribute("draggable", true);
  value.setAttribute("id", inc);
  value.addEventListener("dragstart", handleDragStart);
  value.addEventListener("dragend", handleDragEnd);
  value.innerHTML = `<input class="checkbox-round" type="checkbox" name="Checkbox" id=${inc}>
     <label class="create-js-label" for=${inc}>${input.value}</label>
     <div class = "create-js-date">${inputdate.value}</div>
     <button class="create-js-button" onclick="deleteRow(event)" ><span class="material-symbols-outlined delete">delete</span></button>
     `;
 
  if ((input.value === "")&& (inputdate.value == "")) {
    alert("Please write something");
  } else {
    TO_DO.append(value);
    getNewId();
  }
  input.value = "";
  inputdate.value = "";

});