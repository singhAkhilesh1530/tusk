/*
//getElementById();

console.dir(document);
console.log(document.domain);
console.log(document.title);
document.title = "123";
console.log(document.title)
console.log(document.doctype);
console.log(document.head);
console.log(document.all);
console.log(document.forms);
console.log(document.images);
console.log(document.links);
const headerTitle = document.getElementById('header-title');
const header = document.getElementById('main-header');
headerTitle.textContent = 'Hello World';
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
headerTitle.style.borderBottom = 'solid 3px black';
header.style.borderBottom = 'solid 3px black';
document.title = 'XYZ';
headerTitle.innerHTML = '<h1>Hello! World<h1>';



//getElementByclassName();
const items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello Once more';
items[1].style.fontWeight = 'Bold';
items[2].style.backgroundColor = 'Yellow';
items[3].style.backgroundColor = 'Green';
for(let i = 0; i < items.length; i++){
    items[i].style.backgroundColor = 'orange';
}


//getElementByTagName();
const li = document.getElementsByClassName('list-group-item');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello Once more';
li[1].style.fontWeight = 'Bold';
li[2].style.backgroundColor = 'Yellow';
li[3].style.backgroundColor = 'Green';
for(let i = 0; i < li.length; i++){
    li[i].style.backgroundColor = 'blue';
}


// Single Element Selector
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));
// Multiple Element Selector
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
*/


//const itemList = document.querySelector('#items');

//ParentNode
/*
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);
itemList.parentNode.parentNode.style.backgroundColor = 'blue';
console.log(itemList.parentNode.parentNode.parentNode);
itemList.parentNode.parentNode.parentNode.style.backgroundColor = 'yellow';
*/

//ParentElement
/*
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElelment);
itemList.parentNode.parentNode.style.backgroundColor = 'blue';
console.log(itemList.parentElement.parentElement.parentElement);
itemList.parentNode.parentElement.parentElement.style.backgroundColor = 'yellow';
*/

//childNodes
/*
console.log(itemList.childNodes);
*/

//Children
/*
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';
// firstChild/lastChild
console.log(itemList.firstChild);
itemList.firstChild.textContent = 'Arree';
console.log(itemList.lastChild);
itemList.lastChild.textContent = 'Bhaaii';
// firstElementChild/lastElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hey';
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Bro';
*/

//Siblings
/*
//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);
//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';
*/

/*
// Create Element
const newDiv  = document.createElement('div');
// AddClass
newDiv.className = 'hello';
// Add id
newDiv.id = 'hello1';
// AddAttribute
newDiv.setAttribute('title', 'Hello Div',);

// Create text node
const newDivText = document.createTextNode('Hello World');
// Addtext to newDiv
newDiv.appendChild(newDivText);

const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);
*/


const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// new Add Item to List
form.addEventListener('submit', addItem);

//Delete an Iem from List
itemList.addEventListener('click', removeItem);

//filter items
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();

    //Get Input Value
    const newItem = document.getElementById('item').value;
    //Create new li element
    const li = document.createElement('li');
    //Add class to list item
    li.className = 'list-group-item';
    //Add text node to list
    li.appendChild(document.createTextNode(newItem));
    //Create Del button
    const delbutton = document.createElement('button');
    //Add class to button
    delbutton.className = 'btn btn-danger btn-sm float-right delete';
    // Add button to list
    delbutton.appendChild(document.createTextNode('X'));
    //Add button to list
    li.appendChild(delbutton);
    //Add new list element to list items
    itemList.appendChild(li);
}



function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure!')){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


