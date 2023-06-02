let listItems = [];

function insert(){
    let items = {
        id: listItems.indexOf(),
        name: document.getElementById('boxie').value,
        createdDate: new Date(),
    };

    listItems.push(items);
    console.log(listItems)
}
let result = document.getElementById('label');

    function print(){
        result.innerHTML = '';
        items.forEach((data) =>{
            result.innerHTML +=`
            <label><input type="checkbox">${data.name}</label>
            <label><input type="checkbox">${data.name}</label>
            <label><input type="checkbox">${data.name}</label>
            `
        })
    }
    function sort(){
        listItems.sort();
    }

