interface Hello {
	name: string;
}

function HelloSomething(string: string): Hello {
	return { name: string } as Hello;
}

console.log(`Hello ${HelloSomething('World').name}`);;;