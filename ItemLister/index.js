let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//  Form submitt event  //
form.addEventListener('submit', addItem);

// Add item //
function addItem(e){
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
    let = deleteButton = document.createElement('button');

    // Add classes to delete button //
    deleteButton.className = 'delete';

    //  Append text Node  //
    deleteButton.appendChild(document.createTextNode('X'));

    //  Append button to li  //
    li.appendChild(deleteButton);

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


//     Filter Event    //
filter.addEventListener('keyup', filterItems);

//  Filter items //
function filterItems(e) {
    //  convert to lowercase
    let text = e.target.value.toLowerCase();
    //  Get li's
    let items = itemList.getElementsByTagName('li');
    //  Convert to an array 
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
           item.style.display = 'flex'; 
           item.style.borderBottom = '1px solid gray'; 
        }   else {
            item.style.display = 'none';
        }
    })
}