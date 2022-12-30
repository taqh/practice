// let change = document.getElementById('box');


// let button = document.getElementById('btn');
// let button2 = document.getElementById('btn2');

// button.addEventListener('click', open);
// button2.addEventListener('click', close);

// function open(){
//     // change.style.display = 'flex'
//    change.id = 'box-1'
// //    console.log(this.id)
   
// }

// function close(){
//     // change.style.display = 'none'
//     change.id = 'box-2'

// }

// let frame = document.getElementById('image');
// let foto = document.getElementById('preview');

// foto.addEventListener('mouseenter', update)
// foto.addEventListener('mouseleave', undo)

// function update(){
//     frame.id = 'image1';
//     console.log('working');
//     frame.innerHTML = this.alt;
//     // In this function you should 
//     // change the url for the backgroundn image of the div with the id = "image"
//     // to the source file of the prev

//     // Change the text of the preview image
// }

// function undo(){
//     // in this function you should 
//     // 1 u=
//     frame.id = 'image'
//     frame.innerHTML = 'Hover over image below to display here.'
//     console.log('leaving');
// }

// let Name = prompt("What is your name?")

// if(Name.length != 0){
//     document.write("Hello " + Name)






// function check(params) {
//     let email = document.getElementById('email_addr');
//     let email2 = document.getElementById('email_repeat');
//     if (email.value != email2.value) {
//         alert("The two emails must match!!")
//         return false;
//     }
// }

// function nicknameFunction(){
//     if(document.getElementById('yesNick').checked){
//         document.getElementById('nick').style.display='inline';
//         document.getElementById('nickname').setAttribute('required', true);
//     }
//     else {
//         document.getElementById('nickname').removeAttribute('required');
//         document.getElementById('nick').style.display='none';
//     }
// }
// const s = [5, 7, 2];
// function editInPlace() {
//     "use strict";

//     // s = [2, 5, 7]
//     s[0] = 2;
//     s[1] = 5;
//     s[2] = 7;

// }
// editInPlace();

// console.log(s);

// PREVENT MUTATION WITH OBJECT.FREEZE() //


// function freezeObj(){
//     "use strict";

//     const MATH_CONSTANTS = {
//         PI: 3.14
//     };

//     Object.freeze(MATH_CONSTANTS);

//     try {
//         MATH_CONSTANTS.PI = 99;
//     }   catch( ex ) {
//         console.log(ex);
//     }
//     return MATH_CONSTANTS.PI
// }

// const PI = freezeObj();

// console.log(PI);

const magic = () => new Date();
