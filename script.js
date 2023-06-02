let listItems = [];

function add(){
    let items = {
        id: document.getElementById('name').value,
        name: document.getElementById('boxie').value,
        createdDate: document.getElementById('age').value,
    };

    listItems.push(items);
    console.log(listItems)



}
