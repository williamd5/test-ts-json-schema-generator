import A from "../a.js";

class Test {
	private static readonly test = A.hello;
	constructor() {
		console.log(Test.test);
	}
}

namespace Test {
	export interface A {
		foo: string;
		bar: {
			baz: number;
		}
	}
	export class A {public static readonly a = "a";}
}

export default Test;
