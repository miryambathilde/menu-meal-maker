//number 1
const menu = {
  //number 2
  _courses: {
    //number 3
    appetizers: [],
    mains: [],
    desserts: [],
  },
  //number 4
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers){
    this._courses.appetizers = appetizers;
  },
  set mains(mais) {
    this._courses.mains = mains;
  },
 set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  //number 5
  get courses(){
    //number 6
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  //number 7
  addDishToCourse(courseName, dishName, dishPrice){
    //number 8
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  //number 9
  getRandomDishFromCourse(courseName){
    //number 10
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  //number 11
  generateRandomMeal(){
    const appetizers = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizers.price + mains.price + desserts.price;
    return `Your meal is composed for ${appetizers.name}, ${mains.name} and ${desserts.name}, and the total price of your meal is ${totalPrice}`;
  },
};
//number 12
menu.addDishToCourse('appetizers', 'salad', 5.00);
menu.addDishToCourse('appetizers', 'fries', 3.00);
menu.addDishToCourse('appetizers', 'wings', 4.00);

menu.addDishToCourse('mains', 'chicken', 7.00);
menu.addDishToCourse('mains', 'steak', 10.00);
menu.addDishToCourse('mains', 'vegan burger', 8.00);

menu.addDishToCourse('desserts', 'coffee', 2.00);
menu.addDishToCourse('desserts', 'ice cream', 4.00);
menu.addDishToCourse('desserts', 'carrot cake', 5.00);

const meal = menu.generateRandomMeal();
console.log(meal);
