    let items = [];
    let adding= false;
    let error= null;
    let filter= 0;


function findById(id){
    return this.items.find(currentItem => currentItem.id === id);
}

function addItem(item){
    item.expanded = false;
    this.items.push(item);
}

function findAndRemove(id){
    this.items = this.items.filter(currentItem => currentItem.id !== id);
}

function toggleExpandById(id){
    let item = this.findById(id);
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