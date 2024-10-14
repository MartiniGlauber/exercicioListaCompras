const form = document.querySelector("form");
const input = document.querySelector("#inputList");
const addListBtn = document.querySelector("#addListBtn");
const list = document.querySelector(".list");
const helpText = document.querySelector(".helpText");

document.addEventListener("DOMContentLoaded", () => {
  const storedItems = JSON.parse(localStorage.getItem("items")) || [];
  storedItems.forEach((item) => addItenToList(item));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let inputValue = input.value.trim();
  if (validaInput() || itemExists(inputValue)) {
    input.value = "";
    input.style.border = "2px solid red";
    return;
  }

  input.style.border = "";
  addListBtn.innerText = "Adicionar item a lista";
  input.value = "";

  addItenToList(inputValue);

  const storedItems = JSON.parse(localStorage.getItem("items")) || [];
  storedItems.push(inputValue);
  localStorage.setItem("items", JSON.stringify(storedItems));
});

function validaInput() {
  if (input.value == "") {
    insertMessage("É necessário incluir um item");
    input.style.border = "2px solid red";
    return true;
  }
  return false;
}

function itemExists(value) {
  let itens = Array.from(list.querySelectorAll("li")).map((li) =>
    li.firstChild.nodeValue.trim()
  );
  if (itens.includes(value)) {
    insertMessage("Item repetido");
    input.style.border = "2px solid red";
    return true;
  }
  return false;
}

function insertMessage(mensagem) {
  helpText.innerText = mensagem;
  helpText.style.opacity = "1";
  setTimeout(() => {
    helpText.innerText = "";
    input.style.border = "";
  }, 3000);
  return;
}

function addItenToList(inputValue) {
  let li = document.createElement("li");
  li.innerText = inputValue;
  li.style.alignItems = "center";
  const deleteBtn = document.createElement("button");
  deleteBtn.style.backgroundColor = "red";
  deleteBtn.innerHTML = "Deletar item";
  li.appendChild(deleteBtn);
  list.appendChild(li);

  li.style.opacity = "0";
  setTimeout(() => {
    li.style.opacity = "1";
  }, 0);

  deleteBtn.addEventListener("click", (event) => {
    li.style.opacity = "0";
    setTimeout(() => {
      event.target.parentElement.remove();

      const storedItems = JSON.parse(localStorage.getItem("items")) || [];
      const newStoredItems = storedItems.filter((item) => item !== inputValue);
      localStorage.setItem("items", JSON.stringify(newStoredItems));
    }, 500);
  });
}
