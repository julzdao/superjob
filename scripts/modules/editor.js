import DOM from "./dom.js";
import Storage from "./localStorage.js";

export default class Editor {

    static moveJobToTrash() {
        const trashIcons = document.querySelectorAll(".icon--trash");
        
        trashIcons.forEach(icon => {
          icon.addEventListener("click", () => {
            const currentCard = icon.closest(".card");
            const currentId = currentCard.id;
            currentCard.remove();
            Storage.deleteJob(currentId);
            DOM.updateJobCounters();
          })
        })
    };
} 