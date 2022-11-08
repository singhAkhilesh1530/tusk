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
