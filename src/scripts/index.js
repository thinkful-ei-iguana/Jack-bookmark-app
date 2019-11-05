//import $ from "jquery";
import bookmark from "./bookmark.js";


function main(){
    console.log('main runs');
    bookmark.makeEventListeners();
    bookmark.render();
}

$(main);