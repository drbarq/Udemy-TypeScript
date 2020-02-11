const carMakers = ['ford', 'toyota', 'chevy'];
// const carMakers: string[] = ['ford', 'toyota', 'chevy'];
// use annotation when initalizing an empty array
// const carMakers: string[] = [];

const dates = [new Date(), new Date()];

// const carsByMake = [['f150'], ['corolla'], ['camaro']];
const carsByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatable values
// carMakers.push(100);

// help with 'map' and all helper methods
carMakers.map((car: string): string => {
	return car;
});

// flexible types

// const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
