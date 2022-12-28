// const user: (string | number)[] = [1, 'hc']
let tUser: [string, number, boolean]

// tuple ensures you use the above types in that order

tUser = ["hc", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "example@g.com"]

newUser[1] = "hc.com"
// you will see newUser won't follow protocol:
// newUser.push(true)

export {}