let score: number | string = 33

score = 44

score = "55"

type Acct = {
  name: string;
  id: number
}

type Admin = {
  username: string;
  id: number
}

let joey: Acct | Admin = {
  name: "joey",
  id: 133
}

joey = {username: "jm", id: 334}

// accepts or returns multiple values

// function getDbId(id:number | string) {
//   // pretend make some API calls
//   console.log(`DB id is ${id}`));
// }

getDbId(3)
getDbId("3")

function getDbId(id:number | string) {
  // cant do this
  // id.toLowerCase()

  if (typeof id === "string") {
    id.toLowerCase()
  }
  if (typeof id === "number") {
    id + 2
  }
}

// array

const data: number[] = [1, 2, 3]

// both types in array
const data3: (string | number)[] = ["1", 2, "3"]

let pi: 3.14 = 3.14
