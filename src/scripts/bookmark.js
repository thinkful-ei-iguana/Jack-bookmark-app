import $ from 'jquery';
import api from './api';
import store from './bookmark';
import item from './item';

const outputItems = [];

//takes in data and turns it into a bookmark
function handleAddItemClicked(){

}

//puts all the items in outputItems and puts them into the html
function render(){

}

//when a expand button is clicked, expand that element
function handleExpandClicked(){

}

//when a remove button is clicked, remove that button
function handleRemoveClicked(){

}

//when filter is changed, filter items we dont want to see
function handleFilterChanged(){

}

//single export funciton that listens for all possible user actions
function makeEventListeners(){
handleFilterChanged();
handleRemoveClicked();
handleExpandClicked();
handleAddItemClicked();
}

export{
    makeEventListeners,
    render  
}