// 💥 Basic Types

// let and const variable bindings have the same meaning as JS.

// Boolean ✋
const is2020: boolean = true

// Types can be inferred at the time of assignment
const isSuckyYear = true

//Numbers ✋

let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744

// String ✋

const myName = 'Rahul Ballal'
const interpolated = `My name is ${myName}`

// Array ✋

const strings: string[] = ['a', 'b']
const numbers: number[] = [1, 2, 3]

// Tuple ✋

const Person: [string, number] = ['Rahul Ballal', 38]

// Enum ✋

enum ButtonStates {
  On,
  Off,
}
enum StringyButtonStates {
  On = 'on',
  Off = 'off',
  // Disabled,
}

// Unknown (You can read about it, try to never use this) ✋

function doUseless(a: unknown, b): any {
  return [b.c, a.k] // cannot de-reference an unknown
}

// Any ✋

// Unlike unknown, variables of type any allow you to access arbitrary properties, even ones that don’t exist.
// When you dont specify a type and inference is not possible. TS defaults the type to any
// There is no point wrting TS code like this, might as well write vanilla JS at this point
const anything: any = 10

function doSomething(a: any, b): any {
  return [a.c, b.k.p]
}

// Void ✋

function PrintName(): void {
  console.log('Hello World')
}

// Null and Undefined ✋

// Nothing special here, they mean exactly the same.
// when using the --strictNullChecks flag, null and undefined are only assignable to unknown, any and their respective types

// Never ✋
// Another useless type, mostly for functions that never return a value

function raiseError(): never {
  throw new Error('Useless Error')
}

// Object ✋

const someObj: object = 15 // this does not work

const anotherObject: object = { name: 'Rahul', age: 37, isAlien: false }
