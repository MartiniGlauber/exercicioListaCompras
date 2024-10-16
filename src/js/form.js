import { addItemToList, validateInput, itemExists } from './utilsFunctions.js';
import { storeItem } from "./storage.js";
import { form, input } from './constants.js';



export function setupForm(){
    form.addEventListener("submit", (event) => {
        event.preventDefault();
      
        let inputValue = input.value.trim();
        if (validateInput(input) || itemExists(inputValue)) {
          input.value = "";
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