//import $ from "jquery";
import bookmark from "./bookmark.js";
import api from './api.js';
import store from "./store.js";


function main(){
    //console.log('main runs');
    api.getItems().then((items) =>{
        items.forEach((item) => store.addItem(item));
        bookmark.render();
    })
    bookmark.makeEventListeners();
    bookmark.render();
}

$(main);