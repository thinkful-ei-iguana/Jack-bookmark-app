import cuid from 'cuid';


//takes in data and returns an parameters set to those values
const create = function (data){
    return{
        id: cuid(),

    }
}

export default{
    create
}