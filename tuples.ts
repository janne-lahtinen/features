// object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// type alias for the tuple
type Drink = [string, boolean, number];

// tuples
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tee: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];

// object more meaningful
const carStats = {
  horsepower: 400,
  weight: 3354
};
