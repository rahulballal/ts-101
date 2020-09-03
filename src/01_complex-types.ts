// Fixed Union Types
/**
 * Union Types ✋
 */

type CardDeck = 'spade' | 'clover' | 'heart' | 'diamond'

function printDeckName(deckType: CardDeck): void {
  console.info(deckType)
}

printDeckName('spade')

printDeckName('magic') // constraint fails

/**
 * Interfaces ✋
 *  - Define a shape of an object
 *  - Can be implemented by classes
 *  - Can be extended by another interface
 */

interface IPerson {
  name: string
  age: number
  toStringPerson: () => string
}

/**
 * Types ✋
 *   - Define a shape of an object or alias an existing type
 *   - Look like interfaces but have a different use case
 *   - More concrete in nature
 */
type Person = {
  name: string
  age: number
}
// Extending types
type Programmer = Person & { isProgrammer: boolean }

const printPerson = (p: Person): void => {
  return console.info(p.age * 10)
}

/**
 * Function Type Signatures ✋
 */

function inlineSignature(num: number): number {
  return num * num
}

function unreliable(num) {
  return num * 10
}

type FnBinaryNumeric = (a: number, b: number) => number

const add: FnBinaryNumeric = (a, b) => a + b
const multiply: FnBinaryNumeric = (a, b) => a * b

type SortResultType = 1 | 0 | -1

type FnSort = (left: any, right: any) => SortResultType

const personSorter: FnSort = (left, right) => {
  if (left.age === right.age) {
    return -1
  }
  if (left.age > right.age) {
    return 1
  }

  return 0
}

/**
 * Redux/Reducer Example in TS ✋
 */

type State = {
  data?: Person
  isLoading: boolean
  error?: string
}

type PersonActions = { type: 'loading' } | { type: 'success'; result?: Person } | { type: 'error'; error: Error }

const reducer = (prevState: State, action: PersonActions): State => {
  switch (action.type) {
    case 'loading': {
      return { isLoading: true }
    }
    case 'success': {
      return {
        isLoading: false,
      }
    }
    case 'error': {
      return { isLoading: false, error: action.error.message }
    }
  }
}
