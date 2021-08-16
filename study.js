//declare a blank object and add key-values 
const circle = {};

circle.radius = 5;
circle['diameter'] = 10;
circle['circumference'] = circle.diameter * Math.PI;
circle["area"] = Math.PI * circle.radius ** 2;

circle;
//=> { radius: 5, diameter: 10, circumference: 31.41592653589793, area: 78.53981633974483 }


//modify a property using dot and bracket notations
const mondayMenu = {
    cheesePlate: {
      soft: "Chèvre",
      semiSoft: "Gruyère",
      hard: "Manchego",
    },
    fries: "Curly",
    salad: "Cobb",
};
  
mondayMenu.fries = "Sweet potato";
mondayMenu["salad"] = "Ceaser"
  
mondayMenu;
//=> { cheesePlate: { soft: "Chèvre", semiSoft: "Gruyère", hard: "Manchego" }, fries: "Sweet potato", salad: "Ceaser" }


//update an object's property destructively using a function 
function destructivelyUpdateObject(obj, key, value){
    obj[key]=value;
    return obj;
}

const menu = {
    cheesePlate: {
    soft: "Chèvre",
    semiSoft: "Gruyère",
    hard: "Manchego",
  },
  fries: "Curly",
  salad: "Cobb",
};

destructivelyUpdateObject(menu, "salad", "Ceaser");

console.log(menu);
/*
{
    cheesePlate: { soft: 'Chèvre', semiSoft: 'Gruyère', hard: 'Manchego' },
    fries: 'Curly',
    salad: 'Ceaser'
}
*/

//create a clone of an object and modify the newly cloned object's properties (nondestructive)
function nondestructivelyUpdateObject(obj, key, value){
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}

const originalMenu = {
    cheesePlate: {
        soft: "Chèvre",
        semiSoft: "Gruyère",
        hard: "Manchego",
        },
    fries: "Curly",
    salad: "Cobb",
};

nondestructivelyUpdateObject(originalMenu, "salad", "Ceaser");
/*
{
  cheesePlate: { soft: 'Chèvre', semiSoft: 'Gruyère', hard: 'Manchego' },
  fries: 'Curly',
  salad: 'Ceaser'
}
*/

//remove a Property from an Object
const wednesdayMenu = {
    cheesePlate: {
        soft: "Brie",
        semiSoft: "Fontina",
        hard: "Provolone",
    },
    fries: "Sweet potato",
    salad: "Southwestern"
}

delete wednesdayMenu.salad;
console.log(wednesdayMenu);
/*
{
    cheesePlate: { soft: 'Brie', semiSoft: 'Fontina', hard: 'Provolone' },
    fries: 'Sweet potato'
}
*/

