import { addItemToList } from "./utilsFunctions";

export function loadItems(){
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    storedItems.forEach(item => addItemToList(item));
}

export function storeItem(item){
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    storedItems.push(item);
    localStorage.setItem('items', JSON.stringify(storedItems));
}

export function removeItem(item){
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    const newStoredItems = storedItems.filter(storedItem => storedItem !== item);
    localStorage.setItem('items', JSON.stringify(newStoredItems));
}