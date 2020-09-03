/**
 *  Type Morphism ✋
 */

interface ISuperHero {
  name: string
  isGood: boolean
  race: 'human' | 'inhuman'
}

type ReadOnlySuperHero = Readonly<ISuperHero>

const readonlySH: ReadOnlySuperHero = {
  name: 'Bruce Wayne',
  isGood: true,
  race: 'human',
}

readonlySH.isGood = false

type PartialSH = Partial<ISuperHero>

type JustName = Pick<ISuperHero, 'name'>

type JustNotName = Omit<ISuperHero, 'name'>

type WithPlanetButNoRace = Omit<ISuperHero, 'race'> & { planet?: string }

const superman: WithPlanetButNoRace = {
  isGood: true,
  name: 'Clark Kent',
  planet: 'Krypton',
  race: 'Kryptonian',
}
