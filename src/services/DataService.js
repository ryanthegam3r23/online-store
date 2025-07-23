
import axios from "axios";
const catalog = [
    {
        "title":"Banana",
        "image":"banana.png",
        "price":2.50,
        "category":"fruits",
        "_id":"1"
    },
    {
        "title":"Cheese",
        "image":"chesse.png",
        "price":2.00,
        "category":"dairy",
        "_id":"2"
    },
    {
        "title":"Coffee",
        "image":"coffee.png",
        "price":2.76,
        "category":"dairy",
        "_id":"3"
    },
    {
        "title":"Hoodie",
        "image":"hoodie.png",
        "price":20.50,
        "category":"clothes",
        "_id":"4"
    },
    {
        "title":"Milk",
        "image":"milk.png",
        "price":3.50,
        "category":"dairy",
        "_id":"5"
    },
    {
        "title":"Oranges",
        "image":"oranges.png",
        "price":2.33,
        "category":"fruits",
        "_id":"6"
    },
    {
        "title":"Steak",
        "image":"Steak.jpeg",
        "price":4.50,
        "category":"dairy",
        "_id":"7"
    },
    {
        "title":"Tea",
        "image":"tea.jpg",
        "price":1.99,
        "category":"dairy",
        "_id":"8"
    },
    {
        "title":"Teapot",
        "image":"teapot.jpg",
        "price":5.00,
        "category":"non-dairy",
        "_id":"9"
    },
    {
        "title":"Vitamins",
        "image":"vitamins.png",
        "price":3.10,
        "category":"non-dairy",
        "_id":"10"
    },
    
]

class DataService{
    async getProducts(){
        //if you need to start the front end without the back end uncomment the line below
        //return catalog;

        let response = await axios.get("http://127.0.0.1:8000/api/products");
        return response.data;
    }
}

export default DataService;