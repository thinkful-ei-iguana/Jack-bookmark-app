//import $ from 'jquery';
import api from './api.js';
import store from './store.js';
import item from './items.js';

const outputItems = [];

//takes in data and turns it into a bookmark
function handleAddItemClicked(){
    $('main').on('click', '.add-new', event=>{
        console.log('added clicked');
    });

}

//when a expand button is clicked, expand that element
function handleExpandClicked(){
    console.log('expand clicked runs');
}

//when a remove button is clicked, remove that button
function handleRemoveClicked(){
    console.log('handle added clicked runs');
}

//when filter is changed, filter items we dont want to see
function handleFilterChanged(){
    console.log('filter clicked runs');
}

//puts all the items in outputItems and puts them into the html
function render(){
    
    //puts all the elements into outputItems, filtering items with a rating lower than the filter rating
    let outputItems = [...store.items].filter(item => item.rating >= store.filter);
    console.log(outputItems);
    //takes the filtered list and turns them into html formatted elements
    let outputString = htmlifyItems(outputItems);
    $('main').html(outputString);


}

function htmlifyItems(data){
    let final = "<ul>";
    data.forEach(element => {
        final += `<li>
        <p>${element.title}</p>
        <button class="delete-item">Delete</button>
        <button class="expand-item">Expand</button>
        </li>`
    });
    final += "</ul>";
    return final;
}

//single export funciton that listens for all possible user actions
function makeEventListeners(){
handleFilterChanged();
handleRemoveClicked();
handleExpandClicked();
handleAddItemClicked();
}

export default{
    makeEventListeners,
    render  
}