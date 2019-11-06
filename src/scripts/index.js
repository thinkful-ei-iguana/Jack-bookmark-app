//import $ from "jquery";
import bookmark from "./bookmark.js";
import api from './api.js';
import store from "./store.js";


function main(){
    //console.log('main runs');
    api.getItems().then((items) =>{ 
        items.forEach((item) => {
            //console.log('item is ' + item);
            store.addItem(item);
           // console.log('mainStore is ' + store.items);
        });
        //console.log('end store is ' + store.items);
        bookmark.render();
    });
    /*api.getItems().then((items) => {
        store.makeStore(items);
        bookmark.render();
    });*/
    bookmark.makeEventListeners();
    bookmark.render();
}

$(main);