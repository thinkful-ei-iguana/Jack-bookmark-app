import item from "./items.js";

const store ={
    items : [{
        id: 'x56w',
        title: 'Title 1',
        rating: 3,
        url: 'http://www.title1.com',
        description: 'lorem ipsum dolor sit',
        expanded: false
      },
      {
        id: '6ffw',
        title: 'Title 2',
        rating: 5,
        url: 'http://www.title2.com',
        description: 'dolorum tempore deserunt',
        expanded: true
      } ],
    adding: false,
    error: null,
    filter: 0

};

function findById(id){
    return this.store.items.find(currentItem => currentItem.id === id);
}

function addItem(item){
    this.store.items.push(item);
}



export default {
    store,
    findById,
    addItem
}