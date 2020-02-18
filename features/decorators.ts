class Boat {
	// property
	color: string = 'red';

	// accessor
	// @testDecorator
	get formattedColor(): string {
		return `This boat's color is ${this.color}`;
	}

	// method
	@testDecorator
	pilot(): void {
		console.log('swish');
	}
}

function testDecorator(target: any, key: string): void {
	console.log('Target:', target); // target is the prototype of Boat
	console.log('key:', key); // key of the property/accessor/method it is placed on
}
