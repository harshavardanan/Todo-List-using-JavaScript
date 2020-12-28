const input = document.getElementById('userInput');
const button = document.getElementById('button');
const ul = document.getElementById('container');
const item = document.getElementsByTagName('li');

//get the input value
function inputValue(){
    return input.value.length;
}

//get the item length
function itemLength(){
    return item.value.length;
}
function createListItem(){
    //create a new list element
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value.toUpperCase()));
    ul.appendChild(li);
    input.value = "";
    
    //create a delete button within the list
    var deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode("Delete"));
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteListItem);
    deleteButton.style.float = "right";

    function deleteListItem(){
        ul.removeChild(li);
    }

}
function addElement(){
    input.value.length > 0 ? createListItem() : alert('empty todos not allowed');
}
function addElementOnKeyPress(){
    input.value.length > 0 && onkeypress === 13 ? createListItem() : alert('empty todos not allowed');
}

button.addEventListener("click", addElement);

onkeypress.addEventListener("onKeyPress", addElementOnKeyPress);