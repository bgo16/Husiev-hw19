class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  static sizes = {
    small: { price: 50, calories: 20 },
    large: { price: 100, calories: 40 }
  };

  static stuffings = {
    cheese: { price: 10, calories: 20 },
    salad: { price: 20, calories: 5 },
    potato: { price: 15, calories: 10 }
  };

  static toppings = {
    spice: { price: 15, calories: 0 },
    mayo: { price: 20, calories: 5 }
  };

  addTopping(...toppings) {
    this.toppings.push(...toppings);
  }

  calculatePrice() {
    let totalPrice =
      Hamburger.sizes[this.size].price +
      Hamburger.stuffings[this.stuffing].price;
    for (let topping of this.toppings) {
      totalPrice += Hamburger.toppings[topping].price;
    }
    return totalPrice;
  }

  calculateCalories() {
    let totalCalories =
      Hamburger.sizes[this.size].calories +
      Hamburger.stuffings[this.stuffing].calories;
    for (let topping of this.toppings) {
      totalCalories += Hamburger.toppings[topping].calories;
    }
    return totalCalories;
  }
}

const hamburger = new Hamburger('small', 'cheese');
hamburger.addTopping('spice', 'mayo');
hamburger.addTopping('mayo');

console.log(hamburger.calculateCalories());
console.log(hamburger.calculatePrice());
