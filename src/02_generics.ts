// Generics, the real dry 🎉

function logThis<T>(a: T): void {
  console.info(typeof a)
}

const logDis = <T>(a: T): void => console.info(typeof a)

logThis<string>('yo')
logDis<number>(5)

function logDese<T>(arr: T[]): number {
  return arr.length
}

// Contraints ✋

interface IArrayLike {
  length: number
  push: (any) => void
}

function addElem<T extends IArrayLike>(list: T): number {
  list.push('works')

  return list.length
}

const result = addElem(['this'])
const res2 = addElem('this')

// Key constraints ✋

function getPropValueBasic<T>(obj: T, key: string) {
  if (key in obj) {
    return obj[key]
  }
  return null
}

interface IPerson2 {
  age: number
  gender: 'male' | 'female'
}
const v0 = getPropValueBasic<IPerson2>({ age: 10, gender: 'female' }, 'name')

function getPropValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

const v1 = getPropValue({ age: 10, gender: 'male' }, 'age')
const v2 = getPropValue({ age: 10, gender: 'male' }, 'name') // name is not a key of IPerson
