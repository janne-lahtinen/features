const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
}

// always add return type annotation > will find error,
// e.g. if we forget to add return

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
}

const throwError = (message: string): never => {
  throw new Error(message);
}

// we finally return something (or not), but can sometimes throw an error
const throwPossiblyError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
}

logWeather(todaysWeather);
