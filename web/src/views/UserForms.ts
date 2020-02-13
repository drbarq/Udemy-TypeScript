export class UserForm {
	constructor(public parent: Element) {}

	// we are going to return an object, not sure what it will say but its a string
	eventsMap(): { [key: string]: () => void } {
		return {
			'click:button': this.onButtonClick
			// 'hover:h1': this.onHoverHeader,
			// 'drag:div': this.onDragDiv
		};
	}

	onButtonClick(): void {
		console.log('Hi there');
	}

	template(): string {
		return `
      <div>
        <h1>User Form</h1>
        <input />
      </div>
    `;
	}

	render(): void {
		const templateElement = document.createElement('template');
		templateElement.innerHTML = this.template();

		this.parent.append(templateElement.content);
	}
}
