import { setupForm } from "./form.js";
import { loadItems } from "./storage.js";

document.addEventListener("DOMContentLoaded", () => {
    loadItems();
    setupForm();
});