class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(...topping) {
    this.toppings.push(...topping);
  }

  calculatePrice() {
    let totalPrice = this.size.price + this.stuffing.price;
    for (let topping of this.toppings) {
      totalPrice += topping.price;
    }
    return totalPrice;
  }

  calculateCalories() {
    let totalCalories = this.size.calories + this.stuffing.calories;
    for (let topping of this.toppings) {
      totalCalories += topping.calories;
    }
    return totalCalories;
  }
}

const size = {
  small: { price: 50, calories: 20 },
  large: { price: 100, calories: 40 }
};

const stuffing = {
  cheese: { price: 10, calories: 20 },
  salad: { price: 20, calories: 5 },
  potato: { price: 15, calories: 10 }
};

const topping = {
  spice: { price: 15, calories: 0 },
  mayo: { price: 20, calories: 5 }
};

const hamburger = new Hamburger(size.small, stuffing.cheese);
hamburger.addTopping(topping.spice, topping.mayo);

console.log(hamburger.calculateCalories());
console.log(hamburger.calculatePrice());
