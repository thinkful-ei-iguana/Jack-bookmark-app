

    let items = [];
    let adding= false;
    let error= null;
    let filter= 0;


function findById(id){
    return items.find(currentItem => currentItem.id === id);
}

function addItem(item){
    //console.log('addItem is ' + item);
    //console.log('addItem store is ' + items);
    item.expanded = false;
    this.items.push(item);
    //console.log('addItem store is ' + items);
}

function findAndRemove(id){
    this.items = this.items.filter(currentItem => currentItem.id !== id);
}

function toggleExpandById(id){
    let item = findById(id);
    item.expanded = !item.expanded;
}


export default {
    items,
    adding, 
    error, 
    filter,
    findById,
    addItem,
    toggleExpandById,
    findAndRemove
    /*makeStore,
    clear*/
}