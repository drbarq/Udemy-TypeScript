// class Vehicle {
// 	// public drive(): void {
// 	// 	console.log('chugga chugga');
// 	// }

// 	// color: string = 'red';
// 	color: string;

// 	constructor(color: string) {
// 		this.color = color;
// 	}

// 	protected honk(): void {
// 		console.log('beep');
// 	}
// }

class Vehicle {
	constructor(public color: string) {}

	protected honk(): void {
		console.log('beep');
	}
}

// const vehicle = new Vehicle();
const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// vehicle.drive();
// vehicle.honk();

// allows us access to Vechicle class
class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		// super is a reference to the parent class constructor
		super(color);
	}

	private drive(): void {
		console.log('vroom');
	}

	startDrivingProcess(): void {
		this.drive();
		this.honk();
	}
}

const car2 = new Car(4, 'red');

car2.startDrivingProcess();
// car.honk();
