//import cuid from 'cuid';


//takes in data and returns an parameters set to those values
const create = function (data){
    return{
        id: cuid(),
        title: data.title,
        rating: data.rating,
        url: data.url,
        description: data.description,
        expanded: false
    }
}

export default{
    create
}