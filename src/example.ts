function add(a: number, b: number) {
  return a + b
}

add(1, 2)

interface User {
  name: {
    first: string
    middle: string
    last: string
  }
}

const hadi: User = {
  name: {
    first: 'had',
    middle: 'd',
    last: 'i',
  },
}
console.log(hadi)
const username = 'freddy'
typeof username === 'string'

if (!('serviceWorker' in navigator)) {
  // you have an old browser :-(
}
const myObj = {
  name: 'hadi "the best"',
}
console.log(myObj)

const greeting = 'hello'
console.log(`${greeting} world!`)
;[1, 2, 3].forEach(x => console.log(x))
