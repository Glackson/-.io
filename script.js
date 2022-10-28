const placeHolders = document.querySelectorAll(".placeholder");
const items = document.querySelectorAll(".item");

for (const placeHolder of placeHolders) {
  placeHolder.addEventListener("dragover", dragOver);
  placeHolder.addEventListener("dragenter", dragEnter);
  placeHolder.addEventListener("dragleave", dragLeave);
  placeHolder.addEventListener("drop", dragDrop);
}

for (const item of items) {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
}

function dragStart(event) {
  let item = event.target;
  item.classList.add("hold");
  item.id = "id" + Date.now();
  event.dataTransfer.setData("text", item.id);
  setTimeout(() => {
    item.classList.add("hide");
  }, 0);

}

function dragEnd(event) {
  let item = event.target;
  item.classList.remove("hold", "hide");
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  let el = event.target;
  if (el.classList.contains("placeholder")) {
    el.classList.add("hovered");
  }
  else if (el.classList.contains("item")) {
    el.parentElement.classList.add("hovered");
  }
}

function dragLeave(event) {
  let el = event.target;
  if (el.classList.contains("placeholder")) {
    el.classList.remove("hovered");
  }
  else if (el.classList.contains("item")) {
    el.parentElement.classList.remove("hovered");
  }
}

function dragDrop(event) {
  console.log(event);
  // event.preventDefault();
  let el = event.target;
  let item = document.querySelector("#" + event.dataTransfer.getData("text"));
  if (el.classList.contains("placeholder")) {
    el.appendChild(item);
    item.classList.remove("hide");
    el.classList.remove("hovered");
  }
  else if (el.classList.contains("item")) {
    el.parentElement.appendChild(item);
    item.classList.remove("hide");
    el.parentElement.classList.remove("hovered");
  }

}


