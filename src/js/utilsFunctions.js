const list = document.querySelector(".list");
const helpText = document.querySelector(".helpText");

export function addItemToList(inputValue) {
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
        removeItem(inputValue);
      }, 500);
    });
  }

  export function validaInput(input) {
    if (input.value == "") {
      insertMessage("É necessário incluir um item");
      input.style.border = "2px solid red";
      return true;
    }
    return false;
  }

  export function itemExists(value) {
    let items = Array.from(list.querySelectorAll("li")).map((li) =>
      li.firstChild.nodeValue.trim()
    );
    if (items.includes(value)) {
      insertMessage("Item repetido");
      input.style.border = "2px solid red";
      return true;
    }
    return false;
  }

  export function insertMessage(mensagem) {
    helpText.innerText = mensagem;
    helpText.style.opacity = "1";
    setTimeout(() => {
      helpText.innerText = "";
      input.style.border = "";
    }, 3000);
  }