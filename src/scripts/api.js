const BASE_URL = "https://thinkful-list-api.herokuapp.com/JackP/bookmark";

//returns all items in the api as an array of json Objects
function getItems(){
    //return fetch(`${BASE_URL}/items`);
    console.log('api.getItems runs');
}

//posts an item at the end of the api
function addItem(){
    console.log('api.getItems runs');
}

//deletes an item from the api
function deleteItem(){
    console.log('api.getItems runs');
}

export default{
    getItems,
    addItem,
    deleteItem
}