interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drinkOne = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `This drink has sugar ${this.sugar} grams.`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drinkOne);