class PersonCls {
  private name: string
  constructor(name: string) {
    this.name = name
  }

  public printName() {
    return this.upperCase()
  }

  private upperCase() {
    return this.name.toUpperCase()
  }
}

class SuperHeroCls extends PersonCls {
  protected age: number
  public logAge() {
    console.log(this.age)
  }
}

class Boss {
  static className = 'BOSS CLASS'

  constructor(protected age: number, protected name: string) {
    // this will automagically make the internal fields
  }

  public printData() {
    console.log(this.age, this.name)
  }
}

class Animal {
  #name: string // # symbol makes the field actually private, unline `_`
  constructor(theName: string) {
    this.#name = theName
  }
}

class Bird {
  constructor(protected readonly species: string) {}

  public getSpecies() {
    return this.species
  }

  public setSpecies(species: string) {
    this.species = species
  }
}
