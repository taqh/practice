
//   console.dir(document);

//  console.log(document.domain);
//   console.log(document.URL);
//   console.log(document.title);

//   console.log(document.forms);

// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title')
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';

// headerTitle.style.borderBottom = 'solid 3px red';

// let items = document.getElementsByClassName('list-group-item');
// console.log(items)
// console.log(items[2])

// items[1].textContent = 'Hello 2';
// items[1].style.backgroundColor = 'yellow'


//GETELEMENTSBYTAGNAME



// QUERYSELECTOR

// let header = document.querySelector('#main-header');
// header.style.borderBottom = '4px solid red';

// let input = document.querySelector('input');
// input.value = 'Hello World'

// let submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector
// ('.list-group-item:last-child');
// lastItem.style.color = 'blue'

// let seconditem = document,querySelector
// ('.list-group-item:nth-child(2)');
// seconditem.style.color = 'coral'


// //QUERYSELECCTOR ALL//

// let titles = document.querySelectorAll('.title');

// console.log(titles);

// let odd = document.querySelectorAll('li:nth-child(odd)');

// for (let i = 0; i < odd.length; i++) {
//     odd[i]
// }



//Traversing the dom //

let itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[2]);

// itemList.children[2].style.backgroundColor = 'burlywood';

// FirstChild
// console.log(itemList.firstChild);
// //FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// LastChild
// console.log(itemList.lastChild);
//LastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 1';


// nextSibling
// console.log(itemList.nextSibling)

// nextElementSIbling
console.log(itemList.nextElementSibling)