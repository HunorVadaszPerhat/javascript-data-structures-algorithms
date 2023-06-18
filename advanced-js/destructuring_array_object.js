const restaurant = {
	name: 'Mr Pizza',
  location: 'Farum',
  categories: ['Italien', 'Organic', 'Vegetarian'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  startMenu: ['Garlic', 'Bread', 'Salad'],
  openingHours: {
  	thu: {
    	open: 12,
      close: 22
    },
    fri: {
    	open: 11,
      close: 23
    },
    sat: {
    	open: 0,
      close: 24
    }
  },
  
  order: function(startIndex, mainIndex) {
  	return [this.startMenu[startIndex], this.mainMenu[mainIndex]];
  }
};

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x,y,z); // 2, 3, 4
console.log(arr); // [2, 3, 4]

const [first, second] = restaurant.categories;
console.log(first, second); // "Italien", "Organic"

const [firstA, , secondA] = restaurant.categories;
console.log(firstA, secondA); // "Italien", "Vegetarian"

const [firstB, , , secondB] = restaurant.categories;
console.log(firstB, secondB); // "Italien", undefined

const [ , , secondC] = restaurant.categories;
console.log(secondC); // "Vegetarian"

const [starter, main] = restaurant.order(0,2);
console.log(starter, main); // "Garlic", "Risotto"
 
const {name, openingHours, categories}  = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags}  = restaurant;
console.log(restaurantName, hours, tags);

// const {menu = [], startMenu: starters = []} = restaurant;
//console.log(menu, starters); // [], ["Garlic", "Bread", "Salad"]

// default variables
const {menu, startMenu: starters = []} = restaurant;
console.log(menu, starters); // [], ["Garlic", "Bread", "Salad"] // undefined, ["Garlic", "Bread", "Salad"]

// mutating variables
let q = 111;
let v = 444;
const obj = {q: 222, v: 888, m : 444};
({q,v} = obj);
console.log(q,v); // 222, 888

// nested objects 
const {fri} = openingHours;
console.log(fri); // {close: 23,open: 11}

const {fri: {open: op, close: cl}} = openingHours;
console.log(op, cl); // 11, 23







