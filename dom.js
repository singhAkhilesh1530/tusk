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