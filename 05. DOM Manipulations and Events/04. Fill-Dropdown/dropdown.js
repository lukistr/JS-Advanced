function addItem() {
    const selectMenu = document.getElementById("menu");
    const textItem = document.getElementById("newItemText");
    const valueItem = document.getElementById("newItemValue");

    const createOption = document.createElement("option");
    createOption.textContent = textItem.value;
    createOption.value = valueItem.value;
    selectMenu.appendChild(createOption);

    valueItem.value = "";
    textItem.value = "";
}