declare module 'math' {
	export function add(a: number, b: number): number
	export function subtract(a: number, b: number): number
	export function multiply(a: number, b: number): number
	export function divide(a: number, b: number): number
	export function square(a: number): number
}

declare class Car {
	constructor(make: string, model: string, year: number)
	start(): void
	stop(): void
	getDetails(): string
}
