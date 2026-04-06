import Maybe from './Maybe.mjs'


const increment = number => ++number
const broke = number => null

const one = new Maybe(1)
const two = one.map(increment)
const three = two.map(broke)
const four = three.map(increment)
console.log(four.orElse('There was a problem').join())