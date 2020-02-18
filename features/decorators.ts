class Boat {
	// property
	color: string = 'red';

	// accessor
	get formattedColor(): string {
		return `This boat's color is ${this.color}`;
	}

	// method
	// @logError
	@logError('Oops, boat was sunk in ocean') //pass in a config elements into logError
	pilot(): void {
		throw new Error();
		console.log('swish');
	}
}

// decorator factory
function logError(errorMessage: string) {
	return function(target: any, key: string, desc: PropertyDescriptor): void {
		const method = desc.value;

		desc.value = function() {
			try {
				method();
			} catch (e) {
				console.log(errorMessage);
			}
		};
	};
}

new Boat().pilot();

// decorator examples
// class Boat {
// 	// property
// 	color: string = 'red';

// 	// accessor
// 	// @testDecorator
// 	get formattedColor(): string {
// 		return `This boat's color is ${this.color}`;
// 	}

// 	// method
// 	// @testDecorator
// 	pilot(): void {
// 		console.log('swish');
// 	}
// }

// function testDecorator(target: any, key: string): void {
// 	console.log('Target:', target); // target is the prototype of Boat
// 	console.log('key:', key); // key of the property/accessor/method it is placed on
// }

// // testDecorator(Boat.prototype, 'pilot');
// // same as @testDecorator above pilot()
