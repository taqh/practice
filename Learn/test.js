
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

// let itemList = document.querySelector('#items');
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
// console.log(itemList.nextElementSibling);

// console.log(itemList.nextElementSibling);

// CREATE ELEMENT //

// Create a div

// let newDiv = document.createElement('div');

// Add class
// newDiv.className = 'hello';

// // Add id
// newDiv.id = 'test';

// // add attr
// newDiv.setAttribute('title', 'Hello Div')

// // Create a text node
// let newDivText = document.createTextNode('Hello World')

// // Add text to div
// newDiv.appendChild(newDivText);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);


//  EVENTS  //
// let button = document.getElementById('button').addEventListener('click', buttonClick);


// function buttonClick(e) {
    // console.log('Button clicked');

// document.getElementById('header-title').textContent = 'Changed';
// document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// console.log(e);

// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);

// var output = document.getElementById('output');
// output.innerHTML = '<h3>'+e.target.id,'<h3>';

// console.log(e.type);

// console.log(e.clientX);
// console.log(e.clientY);

// console.log(e.offsetX);
// console.log(e.offsetY);

// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// }

// let button = document.getElementById('button');
// let box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('dblclick', runEvent);

// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseUp', runEvent);

// box.addEventListener('mouseenter', runEvent);
// // box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

// let itemInput = document.querySelector('input[type="text"]');
// let form = document.querySelector('form');
// let select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);


// function runEvent(e){
//     e.preventDefault();
//     console.log('EVENT TYPE: '+e.type);
   

    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

    // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

    // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
// }