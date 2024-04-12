const carMakers = ["ford", "toyota", "chevy"]; // inference
const otherMakers: string[] = []; // annotation for empty array

const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

const carsByMakeTwo: string[][] = [];

// help with inference when extracting values
const carHere = carMakers[0];
const myCar = carMakers.pop(); // here it does not work > string | undefined

// prevent incompatible values
// carMakers.push(100);

// help with higher order functions
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
