//import $ from 'jquery';
import api from './api.js';
import store from './store.js';

const outputItems = [];

//when the button is clicked, displays an adding form 
function handleAddItemClicked(){
    $('header').on('click', '.add-new', event=>{
        store.adding = true;
        render();
    });

}

//handler for the sumbit button in the add item form, sends form data to addItem
function handleAddSubmit(){
    $('#new-item').submit( event =>{
        event.preventDefault();
        let formElement = $('#new-item')[0];
        addItem(formElement);
        
        store.adding = false;
        render();
    });
}

//adds item to api, store gets the item from the api and adds it to local store
function addItem(data){
    let jsonFormat = serializeJson(data);
    api.addItem(jsonFormat)
    .then(res =>{ 
        store.addItem(res);
        render();
    }); 
}

//takes a return form and turns it into a json object
function serializeJson(form) {
    const formData = new FormData(form);
    const o = {};
    formData.forEach((val, name) => o[name] = val);
    return JSON.stringify(o);
}

//when a expand button is clicked, expand that element
function handleExpandClicked(){
    $('main').on('click', '.expand-item', event =>{
        const id = getItemIdFromElement(event.currentTarget);
        store.toggleExpandById(id);
        render();
    });
}

function getItemIdFromElement(item){
    return $(item)
    .closest('.bookmark')
    .attr('id');
}

//when a remove button is clicked, remove that button
function handleRemoveClicked(){
    $('main').on('click', '.delete-item', event =>{
        const id = getItemIdFromElement(event.currentTarget);
        api.deleteItem(id)
            .then(res=> res.json)
            .then((oldItem) => {
                store.findAndRemove(id);
                render();
            });
    })
}

//when filter is changed, filter items we dont want to see and rerender the page
function handleFilterChanged(){
    $('.filter').change( e => {
       e.preventDefault();
       store.filter =  $(e.currentTarget).children("option:selected").val()
       render();
    });

    
}

//puts all the items in outputItems and puts them into the html
function render(){
    //puts all the elements into outputItems, filtering items with a rating lower than the filter rating
    let outputItems = [...store.items].filter(item => item.rating >= store.filter);
    //takes the filtered list and turns them into html formatted elements
    let outputString
    if(store.adding){
        outputString = htmlAddItem();
    } else {
        outputString = htmlifyItems(outputItems);
    }
    $('main').html(outputString);
    //alert('rendered');
}

//returns the html for the form to add an item
function htmlAddItem(){
    $('main').html(
        `<form id="new-item"> 
            <label for="title">Name:</label>
            <input type="text" name="title" id="title" class="add-item-form" required>
            <label for="url">Url:</label>
            <input type="url" name="url" id="url" class="add-item-form" required>
            <label for="desc">Decription:</label>
            <input type="text" name="desc" id="desc" class="add-item-form" required>
            <label for="range">Range(between 1-5):</label>
            <input type="number" min="1" max="5" name="rating" id="rating" class="add-item-form" required>
            <button type="button" class="cancel-add">Cancel</button>
            <button type="submit" class="submit-add">Submit</button>
        </form>`
        );
        //debugger;
        handleAddSubmit();
        handleAddCancel();
}
//<label for="title">Name:</label>
//<input type="text" name="title" id="title" class="add-item-form" required>
//<label for="name">Name:</label>
//<input type="text" name="name" id="name" class="add-item-form" required>

function htmlifyItems(data){
    let final = "<ul>";
    data.forEach(element => {
        if(element.expanded){
            final += `<li class="bookmark" id="${element.id}">
            <p>${element.title}</p>
            <a href="${element.url}">${element.url}</a>
            <p>${element.description}</p>
            <div class="item-controls">
                <button class="delete-item">Delete</button>
                <button class="expand-item">Expand</button>
            </div>
            </li>`;
        } else {
            final += `<li class="bookmark" id=${element.id}>
            <p>${element.title}</p>
            <div class="item-controls">
                <button class="delete-item">Delete</button>
                <button class="expand-item">Expand</button>
            </div>
            </li>`;
        }
    });
    final += "</ul>";
    return final;
}




//handler for the cancel button in the add item form, changes store.adding to false and renders 
function handleAddCancel(){
    $('main').on('click', '.cancel-add', event =>{
        event.preventDefault();
        store.adding = false;
        render();
    });
}



//single export funciton that listens for all possible user actions
function makeEventListeners(){
handleFilterChanged();
handleRemoveClicked();
handleExpandClicked();
handleAddItemClicked();
//handleAddSubmit();
//handleAddCancel();
}

export default{
    makeEventListeners,
    render  
}