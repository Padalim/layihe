const listcon = document.getElementById("listcon");
const todoValue = document.getElementById("todoText");
const listItems = document.getElementById("list-items");

const sortButton = document.getElementById('sortButton');

function CreateToDoData() {
    if (todoValue.value.trim() === "") {
        alert("Enter text");
        todoValue.focus();
        return;
    }
    
    let li = document.createElement("li");
    const todoItems = `
        <div>${todoValue.value}</div>
        <button class="deleteButton"></button>
    `;
    li.innerHTML = todoItems;
    listItems.appendChild(li);
    
    todoValue.value = "";
    listcon.style.display = "block";
}
listItems.addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteButton')) {
        const listItem = event.target.closest('li');
        listItems.removeChild(listItem);
    }
});

const addButton = document.getElementById("AddUpdateClick");
addButton.addEventListener("click", CreateToDoData);

sortButton.style.backgroundImage = "url('/photos/image\ \(4\).png')"



let ascendingOrder = true;


function sortList() {
    const items = Array.from(listItems.children);


    
    
    // sortButton.setAttribute('')
    // background-image: url('/photos/image\ \(6\).png');
    // url("/photos/image (6).png")

    sortButton.style.backgroundImage = sortButton.style.backgroundImage === 'url("/photos/image (4).png")'?'url("/photos/image (3).png")':'url("/photos/image (4).png")'
    
    console.log( sortButton.style.backgroundImage)
    items.sort((a, b) => {
        if (ascendingOrder) {
            return a.textContent.localeCompare(b.textContent);
        } else {
            return b.textContent.localeCompare(a.textContent); 
        }
    });
    
    
    while (listItems.firstChild) {
        listItems.removeChild(listItems.firstChild);
    }
    
    
    items.forEach(item => {
        listItems.appendChild(item);
    });
    
    
    ascendingOrder = !ascendingOrder;
}




sortButton.addEventListener('click', sortList);

