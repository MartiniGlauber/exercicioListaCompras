import { addItemToList, validaInput, itemExists, insertMessage } from './utilsFunctions.js';
import { storeItem } from "./storage.js";

const form = document.querySelector("#itemForm");
const input = document.querySelector("#inputList");
const addListBtn = document.querySelector("#addListBtn");

export function setupForm(){
    form.addEventListener("submit", (event) => {
        event.preventDefault();
      
        let inputValue = input.value.trim();
        if (validaInput(input) || itemExists(inputValue)) {
          input.value = "";
          insertMessage("Erro: é necessário inserir item e não pode ser um item duplicado")
          input.style.border = "2px solid red";
          return;
        }
      
        input.style.border = "";
        addListBtn.innerText = "Adicionar item a lista";
        input.value = "";

        addItemToList(inputValue);
        storeItem(inputValue);
    });
}