let form = document.getElementById('addForm');
let itemList = document.getElementById('items')

//  Form submitt event  //
form.addEventListener('submit', addItem);

// Add item //
function addItem(e) {
    e.preventDefault();

    //  Get input value
    let newItem = document.getElementById('item').value;

    //  Create new li element  //
    let li = document.createElement('li');

    // Add class  //
    li.className = 'list-group-item';

    //  Add text node with input value //
    li.appendChild(document.createTextNode(newItem));

    //  Create delete button element  //
    let deleteBtn = document.createElement('button');

    // Add classes to delete button //
    deleteBtn.className = 'delete';

    //  Append text Node  //
    deleteBtn.appendChild(document.createTextNode('X'));

    //  Append button to li  //
    li.appendChild(deleteBtn);

    //  Append li to list   //
    itemList.appendChild(li);
}


//  Delete event  //
itemList.addEventListener('click', removeItem);

// Remove item  //
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

} 