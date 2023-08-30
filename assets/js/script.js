const olEl = document.querySelector("ul");
const shoppingList = ["Pane", "Latte", "Uova", "Carciofi", "Biscotti"];
let i = 0;

while (i < shoppingList.length) {
   olEl.innerHTML += `<li>${shoppingList[i]}</li>`;
   i++;
}
